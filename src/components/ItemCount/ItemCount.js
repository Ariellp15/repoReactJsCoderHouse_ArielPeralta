import React from 'react'
import './ItemCount.css'

function ItemCount() {
    const [stockItems, setStockItems] = React.useState (0);

    let onAdd = () => {
        setStockItems (stockItems + 1)
    };

    let onSubstract = () => {
        setStockItems (stockItems - 1)
    };

    if (stockItems <1) {
        onSubstract = () => {
            setStockItems (stockItems)            
        }
    }
    if (stockItems >=5) {
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




