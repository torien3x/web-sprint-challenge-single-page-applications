import React from "react";
import Home from './components/Homepage'
import Form from './components/Form'
import Confirm from './components/Confirmation'
import Header from './components/Header'
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/pizza' element={<Form /> } />
          <Route path='/pizza/confirm' element={<Confirm /> } />
          <Route path='/help' element={<Home /> } />
        </Routes>
    </div>
  );
};
export default App;
