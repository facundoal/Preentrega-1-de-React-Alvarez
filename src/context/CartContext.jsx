import { createContext, useState } from "react"

 export const CartContext = createContext();

 
 export const  CartProvider = ({children}) =>{
    const [ carrito, setCarrito ] = useState ([])

    const agregarCantidad = ( Item, count ) =>{
  
      const itemAgregado = {...Item, count};
  
      const nuevoCarrito =  [...carrito]
  
      const EstaEnElCarrito = nuevoCarrito.find ((producto) =>producto.id === itemAgregado.id)
  
      if (EstaEnElCarrito){
        EstaEnElCarrito.count += count ;
      } else{
        nuevoCarrito.push(itemAgregado)
      }
      
      setCarrito (nuevoCarrito)
  
    }
  
      const carritoCount = () =>{
      return carrito.reduce ((acc, producto) => acc + producto.count, 0) ;
     
    }
   
     
     const precioTotal = () =>{
      
       return carrito.reduce ((acc, producto) => acc + producto.precio * producto.count, 0)
     
      }
  
      
      const vaciarElCarrito = () =>{
          setCarrito([])
      }

      return (
      <CartContext.Provider value = { { carrito, agregarCantidad, carritoCount, precioTotal, vaciarElCarrito } }>
            {children}
        </CartContext.Provider>
        )
 }
