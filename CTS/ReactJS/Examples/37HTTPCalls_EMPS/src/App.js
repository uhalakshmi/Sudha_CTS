import React from 'react';
import './App.css';
import DeleteEmp from './http_emps/DeleteEmp';
import GetEmps from './http_emps/GetEmps';
import PatchEmp from './http_emps/PatchEmp';
import PostEmp from './http_emps/PostEmp';
import PutEmp from './http_emps/PutEmp';

function App() {
  return (
    <div className="App container">
      
      {/* <PostEmp></PostEmp> */}
      {/* <PutEmp></PutEmp> */}
      {/* <GetEmps></GetEmps> */}
      {/* <DeleteEmp></DeleteEmp> */}
      <PatchEmp></PatchEmp>
    </div>
  );
  
}

export default App;
