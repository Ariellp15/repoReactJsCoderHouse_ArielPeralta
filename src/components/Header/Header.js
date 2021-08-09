import React from 'react'
import './Header.css'
import logo from './Logo Redono PNG.png'


const Header = ({ title , subtitle}) => {
    return (
        <div className='Header'>
            <h1>Mi Tienda Online </h1>
            <img src={logo} alt='Logo El Llamado del Ocaso' width='50px'/>
            <h2>{title}</h2>
            <h3>{subtitle} </h3>
        </div>
    )
}

export default Header;
