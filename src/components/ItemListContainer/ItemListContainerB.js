import React from 'react'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainerB = () => {
    const [characters, setCharacters] = useState([]);

    useEffect (() =>{
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(response => response.json())
        .then(res => setCharacters(res))
    }, []);
    return (
        <div className="ItemListContainer">
        <h1>ItemListContainer</h1>
        {characters.map((characters) =>{
            return <ItemList data={characters} />
        })} 
        </div>
    )
}

export default ItemListContainerB
