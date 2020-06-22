import React, { useState } from 'react';
import { useActiveCell, useCellStyle } from '../../hooks';

function Instruments() {
  const { activeCell } = useActiveCell();
  const [style, setStyle] = useCellStyle(activeCell);

  const [bgColors, setBgColors] = useState<string[]>(['', '']);

  const handleBackground = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStyle('background', e.target.value);
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStyle('color', e.target.value);
  };

  const handleFontStyle = (): void => {
    if (style.fontStyle === 'italic') {
      setStyle('fontStyle', 'normal');
      setBgColors(prev => {
        prev[1] = '';
        return prev;
      });
    } else {
      setStyle('fontStyle', 'italic');
      setBgColors(prev => {
        prev[1] = 'graybg';
        return prev;
      });
    }
  };

  const handleFontWeight = (): void => {
    if (style.fontWeight === 'bold') {
      setStyle('fontWeight', 'normal');
      setBgColors(prev => {
        prev[0] = '';
        return prev;
      });
    } else {
      setStyle('fontWeight', 'bold');
      setBgColors(prev => {
        prev[0] = 'graybg';
        return prev;
      });
    }
  };

  return (
    <div className="tool-bar"> 
      <div>
        <label>background</label>
        <input 
          type="color"
          value={style.background}
          onChange={handleBackground}
          />
      </div>

      <div>
        <label>font</label>
        <input 
          type="color"
          value={style.color}
          onChange={handleColor}
          />
      </div>

      <section>
        <span 
          className={`material-icons pointer graybg-hover ${bgColors[0]}`}
          onClick={handleFontWeight}
          >
          format_bold
        </span>
        <span 
          className={`material-icons pointer graybg-hover ${bgColors[1]}`} 
          onClick={handleFontStyle}
          >
          format_italic
        </span>
      </section>
    </div>
  )
}

export default Instruments;