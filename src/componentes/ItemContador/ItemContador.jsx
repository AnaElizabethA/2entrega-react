import React from 'react'
import { useState } from 'react'

const ItemContador = ({inicial,stock,onAdd}) => {


    const [contador, setContador] = useState(1);


    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if(contador > inicial){
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
            <button className="botonCarrito" onClick={() => onAdd(contador)}>
                Agregar al carrito
            </button>
        </div>
    </div>
    

  )
}

export default ItemContador