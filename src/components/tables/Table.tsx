import React, { useState, useEffect, KeyboardEvent } from 'react';
import Cell from './Cell';
import HeaderRow from './HeaderRow';
import './tables.css';

function Table() {
  const [rows, setRows] = useState<string[]>([]);
  const [cols, setCols] = useState<number[]>([]);


  const initializeRow = () => {
    const r: string[] = [];
    for (let i = 65; i <= 90; i++) {
      r.push(String.fromCharCode(i));
    }
    setRows(r);
  };

  const initializeCol = () => {
    const temp: number[] = [];
    for (let i = 1; i <= 100; i++)
      temp.push(i);

    setCols(temp);
  };

  useEffect(() => {
    initializeRow();
    initializeCol();
  }, []);

  return (
    <div className="table-container">
      <table className="table">
        <HeaderRow names={rows} />
        <tbody>
          {cols.map((el: number) => (
            <tr key={el}>
              <th className="row-header">{el}</th>
              {rows.map((s: string) => (
                <Cell key={`${s}${el}`} cellId={`${s}${el}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;