import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../store';

import Cell from '../components/tables/Cell';
import { incrementCellName } from '../utils/stringUtils';

let container: HTMLElement | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container &&
  unmountComponentAtNode(container) && container.remove();
  
  container = null;
});

it ("Active cell changes when anon presses enter", () => {
  let actCell = "A3";  
  act(() => {
    render(<Provider store={store}> <Cell cellId={actCell} key="2222" /> </Provider>, container);
  });

  const el: HTMLInputElement | null = document.querySelector(`[data-testid='${actCell}']`);

  expect(store.getState().get('activeCell')).not.toBe(actCell);
  
  el && fireEvent.click(el);
  expect(store.getState().get('activeCell')).toBe(actCell);

  actCell = incrementCellName(actCell);
  setTimeout(() => {
    el && fireEvent.keyDown(el, { key: 'Enter', code: 13, charCode: 13 });
    expect(store.getState().get('activeCell')).toBe(actCell);
  }, 1000);

});