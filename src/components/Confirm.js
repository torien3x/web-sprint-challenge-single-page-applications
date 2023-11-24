import React from 'react'
import "../styles/Confirm.css"
import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

export default function Confirm() {
  const location = useLocation();

  console.log('params', location)
  return (
    <div style={{display: 'flex', flexDirection:"column", alignItems: 'center'}}>
        <div className='top-content-confirm'>
            <div className='inside-top-content-conirm'>
            <h2>
            Congrats! Pizza is on its way!
            </h2>
           
            </div>
        </div>
        <div className='bottom-content-confirm'>
            <div className='inside-bottom-confirm'>
            <h3>Enjoy this Dog with Pizza</h3>
            <img src='https://images.ctfassets.net/f60q1anpxzid/asset-c6faea9339030e3f7f0b334bef05e3a6/0577a75d8c53a4040e8c8df288c1dce1/Screen-Shot-2015-04-28-at-12.41.37-PM.jpg?fm=jpg&fl=progressive&q=50&w=1200' alt='dog eating pizza'/>
            </div>
        </div>
        <div style={{marginTop: '30px'}}>
              <h2>Here's your order</h2>
              <p>size:{ location.state.pizza.size}</p>
              <p>sauce:{ location.state.pizza.sauce}</p>
             <div>
               <p>Toppings:</p>{location.state.pizza.toppings.map((topping) => {
                return (<p>{topping}</p>)
              })}
             </div>
            </div>
    </div>
  )
}
