import React from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
    <h1 id='title'>Foodtopia Eats</h1>
    <div className='btn-wrapper'>
    <Link to={'/'} id='home-btn'>Home</Link>
    <Link to={'/'} id='help-btn'>Help</Link>
    </div>
</header>

  )
}
