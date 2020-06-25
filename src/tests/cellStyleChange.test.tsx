import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../store';

import Cell from '../components/tables/Cell';
import Instruments from '../components/Header/Instrumens';
import { ITALIC, BOLD, NORMAL } from '../utils/styles';

let container: HTMLElement | null = null;
let toolsBarContainer: HTMLElement | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);

  toolsBarContainer = document.createElement("div");
  document.body.appendChild(toolsBarContainer);
});

afterEach(() => {
  container &&
  unmountComponentAtNode(container) && container.remove();

  toolsBarContainer &&
  unmountComponentAtNode(toolsBarContainer) && toolsBarContainer.remove();
  
  container = null;
  toolsBarContainer = null;
});

it ("Active cell style changes", () => {
  let actCell = "A5";  
  act(() => {
    render(<Provider store={store}> <Cell cellId={actCell} key="2222" /> </Provider>, container);
    render(<Provider store={store}> <Instruments /> </Provider>, toolsBarContainer);
  });

  const el: HTMLInputElement | null = document.querySelector(`[data-testid='${actCell}']`);

  const color: HTMLElement | null = document.querySelector("[data-testid='f-color']");
  const bgColor: HTMLElement | null = document.querySelector("[data-testid='bg-color']");
  const fw: HTMLElement | null = document.querySelector("[data-testid='font-weight']");
  const fs: HTMLElement | null = document.querySelector("[data-testid='font-style']");
  
  el && fireEvent.click(el);

  color && fireEvent.change(color, { target: { value: '#b78585' } });
  expect(el?.style.color).toBe('rgb(183, 133, 133)');
  color && fireEvent.change(color, { target: { value: '#7324ab' } });
  expect(el?.style.color).toBe('rgb(115, 36, 171)');

  bgColor && fireEvent.change(bgColor, { target: { value: '#b78585' } });
  expect(el?.style.background).toBe('rgb(183, 133, 133)');
  bgColor && fireEvent.change(bgColor, { target: { value: '#7324ab' } });
  expect(el?.style.background).toBe('rgb(115, 36, 171)');

  fw && fireEvent.click(fw);
  expect(el?.style.fontWeight).toBe(BOLD);
  fw && fireEvent.click(fw);
  expect(el?.style.fontWeight).toBe(NORMAL);

  fs && fireEvent.click(fs);
  expect(el?.style.fontStyle).toBe(ITALIC);
  fs && fireEvent.click(fs);
  expect(el?.style.fontStyle).toBe(NORMAL);
});