import { useContext } from "react";
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom";


const CartItem = ({ item, quantity }) => {
    const { eliminarProducto } = useContext(CartContext);

    return (
        <div>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {quantity} </p>
            <p> Precio: {item.precio}  </p>
            <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem