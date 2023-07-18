import { useContext } from "react";
import CartContext from "../../context/CartContext"


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