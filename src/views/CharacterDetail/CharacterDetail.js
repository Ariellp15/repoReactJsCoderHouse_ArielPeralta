import React, {useState, useEffect} from 'react'
import './CharacterDetail.css'
import axios from 'axios'
import { Card, Image } from 'semantic-ui-react'
import { data } from 'jquery'

const CharacterDetail = ({match}) => {
    let id = match.params.id;
    const [characters, setCharacters] = useState([]);
    useEffect(()=> {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(res => 
        setCharacters(res.data))
        console.log('console',id)

    }, [id])

    return (
        <div>
            {characters.map((char)=> {
                return (
                    <Card key={char.id}>
                    <Image src={data.img} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{data.name}</Card.Header>
                      <Card.Meta>
                        <span className='date'>{data.status}</span>
                      </Card.Meta>
                      <Card.Description>
                        <p>Species: {data.species}</p>
                        <p>Type: {data.type} </p>
                        <p>Gender: {data.gender}</p>
                      </Card.Description>
                    </Card.Content>
                  </Card>    

                );
            })}           
        </div>
    )
}

export default CharacterDetail
