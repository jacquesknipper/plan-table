import React from 'react';

const PersonList = ({ persons, onSelectPerson }) => {
  return (
    <div>
      <h2>Persons List</h2>
      <ul>
        {persons.map((person, index) => (
          <li
            key={index}
            onClick={() => onSelectPerson(index)}
            style={{
              color: person.color,
              cursor: 'pointer',
              fontWeight: person.selected ? 'bold' : 'normal',
            }}
          >
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;