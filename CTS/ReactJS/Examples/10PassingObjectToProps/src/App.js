import React from 'react';
import './App.css';
import Person from './person/Person';

function App() {
  var per1 = {
    first_name:"Anil",
    last_name:"Ambani",
    age:"52",
    email:"anil.ambani@gmail",
    profission:"Business"
  }
  var per2 = { first_name:"Mukesh", last_name:"Ambani", age:"56", email:"mukesh.ambani@gmail.com", profission:"Business" }
  var per3 = { first_name:"Amala", last_name:"Akkineni", age:"48", email:"amala.akkineni@gmail.com", profission:"Actor" }
  var per4 = { first_name:"Akhil", last_name:"Akkineni", age:"32", email:"akhil.akkineni@gmail.com", profission:"Actor"}
  
  return (
    <div className="App container">
      <Person per_info={per1 }></Person>
      <Person per_info={per2 }></Person>
      <Person per_info={per3 }></Person>
      <Person per_info={per4 }></Person>
    </div>
  );
}

export default App;
