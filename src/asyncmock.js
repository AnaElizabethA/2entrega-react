const productos = [
    { nombre: "arrimo", precio: 25000, id: "1", img: "../img/arrimo doble.jfif", idCat: "2",stock: 10},
    { nombre: "arrimo2", precio: 19000, id: "2", img: "../img/arrimo con cajon.jpg", idCat: "2",stock: 10 },
    { nombre: "estante", precio: 20000, id: "3", img: "../img/estante de joyas o zapato.jpg", idCat: "3",stock: 10 },
    { nombre: "estante2", precio: 30000, id: "4", img: "../img/pinito estante.jpg", idCat: "3",stock: 10 },
    { nombre: "mesa", precio: 15000, id: "5", img: "../img/mesa centro vidrio.jfif", idCat: "4",stock: 10 },
    { nombre: "mesa2", precio: 35000, id: "6", img: "../img/mesa de centro elefate.jpg", idCat: "4",stock: 10 },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//función que nos retorne un solo item

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}

//esta retornara toda la categoria al filtrarlo

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}