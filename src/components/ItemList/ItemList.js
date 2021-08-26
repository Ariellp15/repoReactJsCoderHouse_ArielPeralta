import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemList.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemList = ({data}) => (
    <Card>
      <Image src={data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header> {data.name} </Card.Header>
        <Card.Meta>
          <span className='date'> {data.status} </span>
        </Card.Meta>
        <Card.Description>
        <p>Species: {data.species}</p>
        <p>Type: {data.type} </p>
        <p>Gender: {data.gender}</p>
        </Card.Description>
      </Card.Content>
      <ItemDetailContainer/>
      <ItemCount/>
    </Card>
  )
  
  export default ItemList
  