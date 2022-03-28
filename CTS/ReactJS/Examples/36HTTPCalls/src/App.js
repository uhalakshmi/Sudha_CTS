import React from 'react';
import './App.css';

import Comments from './http/Comments';
import Users from './http/Users';


function App() {
  return (
    <div className="App container">
      
      {/* <Users></Users> */}
      <Comments></Comments>
    </div>
  );
  
}

export default App;
