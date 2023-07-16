import './Cart.css'
import { useContext } from 'react'
import CartContext from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, limpiarCarrito, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (

            <>
            <h1> "Aun no hay productos en el carrito"</h1>
            <Link to= '/' className='Option'> Ver Productos </Link>
            </>
        )
    }

    return (
    <div>
        { cart.map(p => <CartItem key={p.id} {...p}/> ) }
        <h3>Total: ${total}</h3>
        <button onClick={() => limpiarCarrito()} className="button">Limpiar carrito</button>
        <Link to= '/ckeckout' className='Option'> Finalizar Compra </Link>
    </div>
)
}

export default Cart