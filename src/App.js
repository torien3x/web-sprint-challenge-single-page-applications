import React from "react";
import Home from './components/Home'
import Form from './components/Form'
import Confirm from './components/Confirm'
import Header from './components/Header'
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/pizza/form' element={<Form /> } />
          <Route path='/pizza/confirm' element={<Confirm /> } />
          <Route path='/help' element={<Home /> } />
        </Routes>
    </div>
  );
};
export default App;
