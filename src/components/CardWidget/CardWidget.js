import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'


const CardWidget = ( {name, format, edition, img}) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'> {edition} </span>
      </Card.Meta>
      <Card.Description> {format}</Card.Description>
      <Icon disabled name='book' />
    </Card.Content>
  </Card>
)

export default CardWidget
