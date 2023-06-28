import './ItemDetail.css'
import ItemContador from '../ItemContador/ItemContador'

const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const onAdd =(quantity) => {
    console.log(quantity)
  }

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
        <img src= {img} alt={nombre} />
        <ItemContador inicial={1} stock={10} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail