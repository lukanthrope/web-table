import React from 'react';

interface CellProps {
  names: string[];
}

function HeaderRow({ names }: CellProps) {
  return (
    <thead>
      <th></th>
      { names.map((el: string) => <th className="t-header">{ el }</th> )}
    </thead>
  )
}

export default HeaderRow;