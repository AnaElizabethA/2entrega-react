//ORDEN de importacion:
// se importan las funciones de react primero
//la importacion de los componentes
//la importacion de los estilos
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>} />
          <Route path='/item/:idItem' element= {<ItemDetailContainer/>} />
          <Route path='*' element= {<h1> 404 NOT FOUND </h1>} />
        </Routes>
        
      </BrowserRouter>

    </>
  )
}


export default App

