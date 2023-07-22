import { useState, useContext } from "react";
import CartContext from "../../context/CartContext"
import { db } from '../../services/config'
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {

    const { cart, limpiarCarrito, totalQuantity } = useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");


    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.quantity
            })),
            total: totalQuantity,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };
 

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock; 

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                }); 
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        limpiarCarrito();
                    })
                    .catch((error) => {
                        setError("Error al crear la orden, vuelva más tarde");
                    })
            })
            .catch((error) => {
                setError("Error al actualizar el stock. Intente nuevamente");
            })

    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario} className="formulario">
                {cart.map(producto => (
                    <div key={producto.id}>
                        <p>
                            {producto.item.nombre} x {producto.quantity}
                        </p>
                        <p>Precio $ {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <hr />

                <div className="form-group">
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit"> Finalizar Compra </button>
            </form>
            {
                orderId && (
                    <strong className="ordenId">¡Gracias por tu compra! Tu número de orden es {orderId} </strong>
                )
            }


        </div>
    )
}

export default Checkout