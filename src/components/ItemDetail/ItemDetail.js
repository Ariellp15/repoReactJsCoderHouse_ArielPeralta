import React from 'react'
import { Card } from 'semantic-ui-react'
import logo from '../Header/2560px-Rick_and_Morty.svg.png'
import './ItemDetail.css'

const ItemDetail = () => (
    <Card>
    <Card.Description>
        <img src={logo} alt="logo" width="50px"></img>
        <p>Precio: $XXX</p>
    </Card.Description>
    </Card>
  )
  
  export default ItemDetail