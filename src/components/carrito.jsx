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
        carrito.map((Item) => (
          <div key={Item.id}>
            <h2>{Item.nombre}</h2>
            <img src={Item.imagen} alt={Item.nombre} />
            <p>precio por unidad: $ {Item.precio} </p>
            <p>precio total:$ {Item.precio * Item.count} </p>
            <p>cantidad : {Item.count} </p>
          </div>
        ))
        }  

   
     <h2>Precio total: $ {precioTotal()} </h2>
    <button onClick={() => VaciarCarrito()}>Vaciar el carrito</button> 
    <Link to ="/checkout">Finalizar la compra</Link>
     </div>


  )
}

export default CarritoPage

