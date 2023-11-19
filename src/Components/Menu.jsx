import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='Menu'>
       <ul className='lista' >
        <li>
            <Link to='/' >Home</Link>
        </li>
        <li>
            <Link to='/sobre-nosotros' >Sobre Nosotros</Link>
        </li>
        <li>
            <Link to='/tareas' >Tareas</Link>
        </li>
       </ul>
    </nav>
  )
}

export default Menu

