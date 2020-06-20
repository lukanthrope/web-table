export type SetCellValue = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type SetCellStyle = (param: string, value: string) => void;

export type ActiveCellHookResult = {
  activeCell: string;
  setActiveCellValue: SetCellValue;
  activeCellValue: string;
};

export type Style = {
  background: string,
  fontStyle: string,
  fontWeight: string,
  color: string,
} 

export type CellHookResult = [string, SetCellValue];
export type CellStyleHookResult = [any, SetCellStyle];

export type ActiveCellHook = () => ActiveCellHookResult;
export type CellHook = (cellId: string) => CellHookResult;
export type CellStyleHook = (cellId: string) => CellStyleHookResult;
