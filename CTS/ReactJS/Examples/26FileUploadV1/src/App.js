import React from 'react';
import './App.css';
import FileUpload from './file_upload/FileUpload';
import Login from './login/Login';

function App() {
  return (
    <div className="App container">
      {/* <Login></Login> */}
      <FileUpload></FileUpload>
    </div>
  );
  
}

export default App;
