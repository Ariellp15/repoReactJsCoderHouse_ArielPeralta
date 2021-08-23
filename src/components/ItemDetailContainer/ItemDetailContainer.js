import React from 'react'
import './ItemDetailContainer.css'
/*import { useEffect, useState } from 'react'
import axios from 'axios';*/
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    /*const [characters, setCharacters] = useState([]);

    useEffect (() =>{
        axios(
            'http://hp-api.herokuapp.com/api/characters'
            )
            .then((res) => setCharacters(res.data));
    }, []);*/
    return (
        <div className="ItemDetail">
              <ItemDetail/>
        </div>
    );
    
}

export default ItemDetailContainer 

//return real cuando lo mande con promise
/*    return (
        <div className="ItemDetail">
        {characters.map((characters) = {return ((<ItemDetail key={characters.actor} data={characters} />))})}
        </div>
    );*/
