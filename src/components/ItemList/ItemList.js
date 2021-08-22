import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'

const ItemList = ({data}) => (
    <Card>
      <Image src={data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header> {data.name} </Card.Header>
        <Card.Meta>
          <span className='date'> {data.dateOfBirth} </span>
        </Card.Meta>
        <Card.Description>
          {data.house} {data.ancestry} {data.species}
        </Card.Description>
      </Card.Content>
      <ItemCount/>

    </Card>
  )
  
  export default ItemList
  