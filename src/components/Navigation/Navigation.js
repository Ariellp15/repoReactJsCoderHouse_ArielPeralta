import React from 'react'
import './Navigation.css' 
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="Navigation">
         <ul>
             <Link to='/'>Home</Link>
             <Link to='/contact'>Contact</Link>
             <Link to='/about'>About</Link>
         </ul>
        </nav>
    )
}

export default Navigation
