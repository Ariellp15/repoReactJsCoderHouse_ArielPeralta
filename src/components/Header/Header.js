import React from 'react'
import './Header.css'
import logo from './Logo-Hogwarts.png'


const Header = ({ title , subtitle}) => {
    return (
        <div className='Header'>
            <h1>The Howarts Store</h1>
            <img src={logo} alt='Howarts logo png' width='200px'/>
            <h2>{title}</h2>
            <h3>{subtitle} </h3>
        </div>
    )
}

export default Header;
