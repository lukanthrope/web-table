import React from 'react';

interface CellProps {
  names: string[];
}

function HeaderRow({ names }: CellProps) {
  return (
    <thead>
      <tr>
        <th></th>
        { names.map((el: string) => <th key={el} className="t-header">{ el }</th> )}
      </tr>
    </thead>
  )
}

export default HeaderRow;