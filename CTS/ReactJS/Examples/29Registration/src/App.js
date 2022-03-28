import React from 'react';
import './App.css';
import FileUpload from './file_upload/FileUpload';
import Login from './login/Login';
import Registration from './registration/Registration';

function App() {
  return (
    <div className="App container">
      {/* <Login></Login> */}
      <Registration></Registration>
    </div>
  );
  
}

export default App;
