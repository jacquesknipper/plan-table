import React from 'react';

const Chair = ({ id, x, y, color, person, onMouseDown, onClick }) => {
  return (
    <div
      onMouseDown={(e) => onMouseDown(e, id, 'chair')}
      onClick={() => onClick(id)}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: color,
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      {person ? person.name : 'Chair'}
    </div>
  );
};

export default Chair;