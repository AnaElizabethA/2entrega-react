//ORDEN de importacion:
// se importan las funciones de react primero
//la importacion de los componentes
//la importacion de los estilos
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemContador from './componentes/ItemContador/ItemContador';
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
        <ItemContador inicial={1} stock={10} onAdd={(contador) => console.log("Cantidad agregada", contador)}/>
      </BrowserRouter>

    </>
  )
}

export default App

//Repaso de componentes:

//1) Renderizar un unico elemento.
// Pueden pasar pros de un componente padre a un hijo.