export type SetCellValue = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type ActiveCellHookResult = {
  activeCell: string;
  setActiveCellValue: SetCellValue;
  activeCellValue: string;
};

export type CellHookResult = [string, SetCellValue];

export type ActiveCellHook = () => ActiveCellHookResult;
export type CellHook = (cellId: string) => CellHookResult;
