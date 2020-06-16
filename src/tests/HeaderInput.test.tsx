import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../store';

import Cell from '../components/tables/Cell';
import FormulaInput from '../components/FormulaInput';

let container1: any = null;
let container2: any = null;

beforeEach(() => {
  container1 = document.createElement("div");
  document.body.appendChild(container1);

  container2 = document.createElement("div");
  document.body.appendChild(container2);
});

afterEach(() => {
  unmountComponentAtNode(container1);
  container1.remove();
  container1 = null;

  unmountComponentAtNode(container2);
  container2.remove();
  container2 = null;
});

it ("Header input changes when any cell changes", () => {
  const onChange = jest.fn();

  const input = document.getElementsByTagName('input');
  
  act(() => {
    render(<Provider store={store}> <Cell cellId="A1" key="2222" /> </Provider>, container1);
  });
  // container1.dispachEvent(new MouseEvent("click"));
  act(() => {
    render(<Provider store={store}> <FormulaInput /> </Provider>, container2);
  });

  const headerInput: any = document.querySelector("[data-testid='header-input']");
  const cellInput: any = document.querySelector("[data-testid='header-input']");

  expect(cellInput?.value).toBe(headerInput?.value);
  fireEvent.click(cellInput);
  fireEvent.change(headerInput, { target: { value: "kek" } });

  expect(cellInput?.value).toBe(headerInput?.value);
});