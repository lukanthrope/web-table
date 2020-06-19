import { incrementCellName } from '../utils/stringUtils';

it ("Function increments number of cell", () => {  
  expect(incrementCellName("A2")).toBe("A3");
  expect(incrementCellName("B100")).toBe("B1");
  expect(incrementCellName("D22")).toBe("D23");
});