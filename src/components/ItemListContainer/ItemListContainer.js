import React from 'react'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import axios from 'axios';
import {Link} from 'react-router-dom';

const ItemListContainer = () => {
    const [characters, setCharacters] = useState([]);
    //const [isLoading, setIsLoading] = useState=(true)



    useEffect (() =>{
        axios('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18').then((res) =>
         setCharacters(res.data)
         );
    }, []);

    return (
        <div className='ItemListContainer GridArea'>
        {characters.map((characters) =>{
            return (
                <div key={characters.id}>
                    <Link to={`/detail/${characters.id}`} >
                    <ItemList data={characters} />
                    </Link>
                </div>
            );    
        })} 
        </div>
    );
}

export default ItemListContainer

