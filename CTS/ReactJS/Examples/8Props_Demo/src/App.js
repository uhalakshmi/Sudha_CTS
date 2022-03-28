import React from 'react';
import './App.css';
import Person from './person/Person';

function App() {
  return (
    <div className="App container">
      <Person first_name="Anil" last_name="Ambani"></Person>
      <Person first_name="Mukesh" last_name="Ambani"></Person>
      <Person first_name="Amala" last_name="Akkineni"></Person>
      <Person first_name="Akhil" last_name="Akkineni"></Person>
    </div>
  );
}

export default App;
