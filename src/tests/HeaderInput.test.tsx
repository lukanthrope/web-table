import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../store';

import Cell from '../components/tables/Cell';
import FormulaInput from '../components/FormulaInput';

let container1: HTMLElement | null = null;
let container2: HTMLElement | null = null;

beforeEach(() => {
  container1 = document.createElement("div");
  document.body.appendChild(container1);

  container2 = document.createElement("div");
  document.body.appendChild(container2);
});

afterEach(() => {
  container1 &&
    unmountComponentAtNode(container1) && container1.remove();
  
  container1 = null;

  container2 &&
    unmountComponentAtNode(container2) && container2.remove();
  
  container2 = null;
});

it ("Header input changes when any cell changes", () => {  
  act(() => {
    render(<Provider store={store}> <Cell cellId="A1" key="2222" /> </Provider>, container1);
  });

  act(() => {
    render(<Provider store={store}> <FormulaInput /> </Provider>, container2);
  });

    const headerInput: HTMLInputElement | null = document.querySelector("[data-testid='header-input']");
    const cellInput: HTMLInputElement | null = document.querySelector("[data-testid='A1']");

    expect(cellInput?.value).toBe(headerInput?.value);

    cellInput && fireEvent.click(cellInput);
    headerInput && fireEvent.change(headerInput, { target: { value: "kek" } });

    expect(cellInput?.value).toBe(headerInput?.value);
});