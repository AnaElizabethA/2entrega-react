import './ItemDetail.css'
import { useState } from 'react'
import ItemContador from '../ItemContador/ItemContador'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = { id, nombre, precio }
    addItem(item, quantity)
  }

  return (
    <>
      <article className='contenedorItem'>

        <header>
          <h2>Nombre: {nombre} </h2>
        </header>

        <picture>
          <img src={img} alt={nombre} />
        </picture>

        <section>
          <h3>ID: {id} </h3>
          <p> descripcion: {descripcion}</p>
          <h3>Precio: {precio} </h3>
        </section>

        <ItemContador inicial={1} stock={10} onAdd={onAdd} />
      </article>

      <footer className='ItemFooter'>
        {quantityAdded > 0 ? (
          <Link to='/cart' className='Option'> Terminar compra </Link>
        ) : (
          <ItemContador initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer></>
  )
}

export default ItemDetail