import React from 'react';
import { useActiveCell, useCellStyle } from '../../hooks';
import { 
  fontParamEquals,
  shouldUseStyle,
  ITALIC,
  BOLD,
  NORMAL,
 } from '../../utils/styles';

function Instruments() {
  const { activeCell } = useActiveCell();
  const [style, setStyle] = useCellStyle(activeCell);
  const { fontWeight, fontStyle, background, color } = style;

  const BG_COLOR_GRAY = 'graybg';

  const handleBackground = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStyle('background', e.target.value);
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStyle('color', e.target.value);
  };

  const handleFontStyle = (): void => {
    if (fontParamEquals(fontStyle, ITALIC)) {
      setStyle('fontStyle', NORMAL);
    } else {
      setStyle('fontStyle', ITALIC);
    }
  };

  const handleFontWeight = (): void => {
    if (fontParamEquals(fontWeight, BOLD)) {
      setStyle('fontWeight', NORMAL);
    } else {
      setStyle('fontWeight', BOLD);
    }
  };

  return (
    <div className="tool-bar"> 
      <div>
        <label>background</label>
        <input 
          type="color"
          value={background}
          onChange={handleBackground}
          data-testid="bg-color"
          />
      </div>

      <div>
        <label>font</label>
        <input 
          type="color"
          value={color}
          onChange={handleColor}
          data-testid="f-color"
          />
      </div>

      <section>
        <span 
          className={`material-icons pointer graybg-hover 
            ${shouldUseStyle(fontParamEquals(fontWeight, BOLD), BG_COLOR_GRAY)}
            `}
          onClick={handleFontWeight}
          data-testid="font-weight"
          >
          format_bold
        </span>
        <span 
          className={`material-icons pointer graybg-hover
            ${shouldUseStyle(fontParamEquals(fontStyle, ITALIC), BG_COLOR_GRAY)}
            `} 
          onClick={handleFontStyle}
          data-testid="font-style"
          >
          format_italic
        </span>
      </section>
    </div>
  )
}

export default Instruments;