import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    //hooks: 
    const [contador, setContador] = useState(1);
    
    let maximoStock = 8; 

    const sumar = () => {
        if(contador < maximoStock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <button onClick={ restar }> - </button>
        <p> {contador} </p>
        <button onClick={ sumar }> + </button>
    </div>
  )
}

export default ItemCount