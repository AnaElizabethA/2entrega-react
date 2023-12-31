import './CartWidget.css'
import { useContext } from 'react'
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)
  const imgCart = "https://cdn-icons-png.flaticon.com/512/3394/3394009.png"

  return (
    <>
      <Link to='/cart' className='CartWidget' >

        <img className='CartImg' src={imgCart} alt="imagen" />
        {
          totalQuantity > 0 && <strong> {totalQuantity} </strong>
        }

      </Link>
    </>
  )
}

export default CartWidget