import React from 'react'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import axios from 'axios';
import Loading from '../Loading/Loading';

const ItemListContainer = () => {
    const [characters, setCharacters] = useState([]);
    //const [isLoading, setIsLoading] = useState=(true)



    useEffect (() =>{
        axios(
            'http://hp-api.herokuapp.com/api/characters'
            )
            .then((res) => setCharacters(res.data));
    }, []);
    return (
        <div className="ItemListContainer GridArea">
        <Loading/>
        {characters.map((characters) =>{return ((<ItemList key={characters.actor} data={characters} />))})} 
        </div>
    );
    
    

    
}

export default ItemListContainer

