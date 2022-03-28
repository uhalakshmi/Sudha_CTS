import React from 'react';
import './App.css';
import Person from './person/Person';

function App() {
  return (
    <div className="App container">
      <Person first_name="Anil" last_name="Ambani" age="52" email="anil.ambani@gmail" profission="Business" ></Person>
      <Person first_name="Mukesh" last_name="Ambani" age="56" email="mukesh.ambani@gmail.com" profission="Business"></Person>
      <Person first_name="Amala" last_name="Akkineni" age="48" email="amala.akkineni@gmail.com" profission="Actor"></Person>
      <Person first_name="Akhil" last_name="Akkineni" age="32" email="akhil.akkineni@gmail.com" profission="Actor"></Person>
    </div>
  );
}

export default App;
