import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart'
import './App.css';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={'Productos por categorias'} />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1> 404 NOT FOUND </h1>} />

          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}


export default App

