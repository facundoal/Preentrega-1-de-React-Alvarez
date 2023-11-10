import React, { useContext } from 'react'
import  {CartContext}  from '../context/CartContext'
import { Link } from 'react-router-dom'
const CarritoPage = () => {

  const {carrito, precioTotal, vaciarElCarrito} = useContext (CartContext)
  
  const VaciarCarrito = () =>{
  vaciarElCarrito()
  }

  return (
    <div className="CarritoDeCompras">
      <h1>Carrito</h1>

    
    
      {
        carrito.map((item) => (
          <div key={item.id}>
            <h2>{item.nombre}</h2>
            <img src={item.imagen} alt={item.nombre} />
            <p>precio por unidad: $ {item.precio} </p>
            <p>precio total:$ {item.precio * item.count} </p>
            <p>cantidad : {item.count} </p>
          </div>
        ))
        }  

   
     <h2>Precio total: $ {precioTotal} </h2>
    <button onClick={() => VaciarCarrito()}>Vaciar el carrito</button> 
    <Link to ="/checkout">Finalizar la compra</Link>
     </div>


  )
}

export default CarritoPage

