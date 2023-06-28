import React from 'react'
import { useState } from 'react'

const ItemContador = () => {
    //hooks: 
    const [contador, setContador] = useState(1);
    
    let maximoStock = 10; 

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
        <div>
        <button onClick={ restar }> - </button>
        <p> {contador} </p>
        <button onClick={ sumar }> + </button>
        </div>
        <div>
            <button className="botonCarrito" onClick={() => onAdd(contador)} disabled={!maximoStock}>
                Agregar al carrito
            </button>
        </div>
    </div>
    

  )
}

export default ItemContador