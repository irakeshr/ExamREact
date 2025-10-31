import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
 import Mycalculator from './Pages/Mycalculator';
import Posts from './Pages/Posts'; 
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Mycalculator/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
