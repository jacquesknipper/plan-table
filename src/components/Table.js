import React from 'react';

const Table = ({ id, x, y, size, onMouseDown }) => {
  return (
    <div
      onMouseDown={(e) => onMouseDown(e, id, 'table')}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: '#8B4513',
        border: '2px solid black',
        cursor: 'grab',
      }}
    >
      Table {id}
    </div>
  );
};

export default Table;