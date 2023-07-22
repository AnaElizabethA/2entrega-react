import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/config'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "inventario"),where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
        .then( res => {
            const nuevosProductos = res.docs.map( doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
}, [idCategoria])


  /*useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])*/

  return (
    <div>
      <h2 className="text-center"> {greeting} </h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer