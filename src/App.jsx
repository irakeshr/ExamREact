import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Calculator from './Pages/calculator';
import Posts from './Pages/Posts';
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Calculator/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
