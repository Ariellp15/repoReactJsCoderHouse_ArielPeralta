import React from 'react'
import './ItemCount.css'

function ItemCount() {
    const [stockItems, setStockItems, initial = 0 , maximStock = 5] = React.useState (0);

    let onAdd = () => {
        setStockItems (stockItems + 1)
    };

    let onSubstract = () => {
        setStockItems (stockItems - 1)
    };

    if (stockItems <= initial) {
        onSubstract = () => {
            setStockItems (stockItems)            
        }
    }
    if (stockItems >= maximStock) {
        onAdd = () => {
            setStockItems (stockItems)            
        }
    }
    return (
        <div>
        <p> {stockItems} </p>
        <button onClick={onSubstract}>-</button>    
        <button onClick={onAdd}>+</button>    

        </div>
    )
}

export default ItemCount




