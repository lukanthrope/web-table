import React from 'react';
import { useActiveCell, useCellStyle } from '../../hooks';

function Instruments() {
  const { activeCell } = useActiveCell();
  const [style, setStyle] = useCellStyle(activeCell);

  const handleBackground = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStyle('background', e.target.value);
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStyle('color', e.target.value);
  };

  const handleFontStyle = (): void => {
    if (style.fontStyle === 'italic') 
      setStyle('fontStyle', 'normal');
    else
      setStyle('fontStyle', 'italic');
  };

  const handleFontWeight = (): void => {
    if (style.fontWeight === 'bold') 
      setStyle('fontWeight', 'normal');
    else
      setStyle('fontWeight', 'bold');
  };

  return (
    <div className="tool-bar"> 
      <label>cell color</label>
      <input 
        type="color"
        value={style.background}
        onChange={handleBackground}
        />

      <label>font color</label>
      <input 
        type="color"
        value={style.color}
        onChange={handleColor}
        />

      <section>
        <a onClick={handleFontStyle}>i</a>
        <a onClick={handleFontWeight}>B</a>
      </section>
    </div>
  )
}

export default Instruments;