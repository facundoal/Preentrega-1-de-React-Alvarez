import  React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {collection, addDoc} from "firebase/firestore"
import { db } from "../../App";
import "../formulario/formulario.css"
import { Link } from "react-router-dom";

const Checkout = () => {

  const [codigoCompra, setCodigoCompra ] = useState ("")

  const { carrito, precioTotal,vaciarElCarrito } = useContext (CartContext);


   const comprar = (event) =>{
    event.preventDefault();

    const pedido = {
      nombre: event.target.nombre.value,
      email: event.target.email.value,
      telefono: event.target.telefono.value,  
      productos: carrito,
      total: Number (precioTotal)
    }
    console.log(pedido)

    const pedidosRef = collection (db, "usuarios")

    addDoc (pedidosRef, pedido )
  .then((doc) =>{
  setCodigoCompra(doc.id)
  vaciarElCarrito()
  })
  .catch((error) => {
    console.error("Error al agregar documento: ", error);
  });
  
  } 
  if (codigoCompra){
    return (
      <div className="mensajeFinal">
      <h1>Muchas gracias por tu compra</h1>
      <p>Tu numero de compra es :{codigoCompra} </p>
      <button><Link to="/"> Volver al catalogo de productos </Link></button>
      </div>
    )
  }
    return (
  
    <div>
      <h1>Finalizar Compra</h1>
      
      <form className="formulario" onSubmit={comprar}>

      <input type="text" placeholder="ingresa tu nombre" name="nombre" />

      <input type="email" placeholder="ingresa tu email" name="email" />

      <input type="email" placeholder="confirma tu email" name="confirmar e-mail" />

      <input type="phone" placeholder="ingresa tu numero de telefono" name="telefono" />

      <button type="submit"> Comprar </button>
      

      </form>
     
    </div>
  );
};

export default Checkout


