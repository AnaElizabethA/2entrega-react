import React from 'react'
import { useState } from 'react'

const ItemContador = ({inicial,stock,onAdd}) => {


    const [contador, setContador] = useState(inicial);


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
    <>
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
    </>
    

  )
}

export default ItemContador