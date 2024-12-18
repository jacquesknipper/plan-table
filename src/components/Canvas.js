import React, { useState } from 'react';
import Table from './Table';
import Chair from './Chair';

const Canvas = ({ persons, onAssignPerson }) => {
  const [tables, setTables] = useState([]);
  const [chairs, setChairs] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const addTable = () => {
    const newTable = { id: tables.length + 1, x: 100, y: 100, size: 100 };
    setTables([...tables, newTable]);
  };

  const addChair = () => {
    const newChair = {
      id: chairs.length + 1,
      x: 150,
      y: 150,
      color: 'gray',
      person: null,
    };
    setChairs([...chairs, newChair]);
  };

  const handleMouseDown = (e, id, type) => {
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;
    setOffset({ x: offsetX, y: offsetY });
    setDraggedItem({ id, type });
  };

  const handleMouseUp = () => {
    setDraggedItem(null);
  };

  const handleMouseMove = (e) => {
    if (!draggedItem) return;

    const { id, type } = draggedItem;
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;

    if (type === 'table') {
      setTables((prev) =>
        prev.map((table) =>
          table.id === id ? { ...table, x, y } : table
        )
      );
    } else {
      setChairs((prev) =>
        prev.map((chair) =>
          chair.id === id ? { ...chair, x, y } : chair
        )
      );
    }
  };

  const handleChairClick = (chairId) => {
    const selectedPerson = persons.find((p) => p.selected);
    if (selectedPerson) {
      setChairs((prev) =>
        prev.map((chair) =>
          chair.id === chairId ? { ...chair, person: selectedPerson } : chair
        )
      );
      onAssignPerson(chairId, selectedPerson);
    }
  };

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '500px', border: '1px solid black' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button onClick={addTable}>Add Table</button>
      <button onClick={addChair}>Add Chair</button>
      {tables.map((table) => (
        <Table key={table.id} {...table} onMouseDown={handleMouseDown} />
      ))}
      {chairs.map((chair) => (
        <Chair key={chair.id} {...chair} onMouseDown={handleMouseDown} onClick={handleChairClick} />
      ))}
    </div>
  );
};

export default Canvas;