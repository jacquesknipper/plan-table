import React, { useState } from 'react';
import Canvas from './components/Canvas';
import PersonList from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([]);

  const addPerson = (person) => {
    const color = person.gender === 'male' ? 'blue' : 'pink';
    setPersons([...persons, { ...person, color, selected: false }]);
  };

  const selectPerson = (index) => {
    setPersons((prev) =>
      prev.map((person, i) => ({ ...person, selected: i === index }))
    );
  };

  const assignPerson = (chairId, selectedPerson) => {
    setPersons((prev) =>
      prev.map((p) =>
        p.name === selectedPerson.name ? { ...p, selected: false } : p
      )
    );
  };

  return (
    <div>
      <h1>Table Plan Creator</h1>
      <div>
        <h2>Add a Person</h2>
        <input
          type="text"
          placeholder="Name"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
              const gender = window.confirm('Is this person male?') ? 'male' : 'female';
              addPerson({ name: e.target.value, gender });
              e.target.value = ''; // Clear input
            }
          }}
        />
      </div>
      <PersonList persons={persons} onSelectPerson={selectPerson} />
      <Canvas persons={persons} onAssignPerson={assignPerson} />
    </div>
  );
};

export default App;