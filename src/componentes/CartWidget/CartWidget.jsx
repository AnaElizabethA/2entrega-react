import './CartWidget.css'

const CartWidget = () => {
    const carrito ="https://cdn-icons-png.flaticon.com/512/3394/3394009.png"
  return (
    <div>
        <img className='carro' src={carrito} alt="imagen"/>
        <strong> 0 </strong>
    </div>
  )
}

export default CartWidget