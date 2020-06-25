export const ITALIC = 'italic';
export const BOLD = 'bold';
export const NORMAL = 'normal';

export const fontParamEquals = (style: string, value: string):boolean => style === value;
export const shouldUseStyle = (b: boolean, s: string): string => b ? s : '';