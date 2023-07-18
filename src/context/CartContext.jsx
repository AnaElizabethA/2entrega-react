import { useState, createContext } from "react"

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  console.log(cart)

  const addItem = (item, quantity) => {
    const productoEnCarrito = cart.find(prod => prod.item.id === item.id)

    if (!productoEnCarrito) {
      setCart(prev => [...prev, { item, quantity }]);
      setTotalQuantity(prev => prev + quantity);
      setTotal(prev => prev + (item.precio * quantity));
    } else {
      const cartActualizado = cart.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      })
      setCart(cartActualizado);
      setTotalQuantity(prev => prev + quantity);
      setTotal(prev =>  (item.precio * quantity));

    }
  }

  const eliminarProducto = (itemId) => {
    const productoEliminado = cart.find(prod => prod.item.id === itemId);
    const cartActualizado = cart.filter(prod => prod.id !== itemId)
    setCart(cartActualizado)
    setTotalQuantity(prev => prev - productoEliminado.quantity);
    setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
  }

  const limpiarCarrito = () => {
    setCart([])
    setTotalQuantity(0)
    setTotal (0)
  }


  return (
    <CartContext.Provider value={{ cart, total, totalQuantity, addItem, eliminarProducto, limpiarCarrito, }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext