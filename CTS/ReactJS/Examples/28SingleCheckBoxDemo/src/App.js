import React from 'react';
import './App.css';
import FileUpload from './file_upload/FileUpload';
import Login from './login/Login';
import Subscribe from './single_checkbox/Subscribe';

function App() {
  return (
    <div className="App container">
      {/* <Login></Login> */}
      <Subscribe></Subscribe>
    </div>
  );
  
}

export default App;
