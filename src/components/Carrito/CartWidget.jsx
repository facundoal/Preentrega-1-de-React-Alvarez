import { useContext } from "react";
import { Link } from "react-router-dom";
import  {CartContext}  from "../../context/CartContext";
import  "../Carrito/CartWidget.css"

const CartWidget = () =>{

    const {carritoCount} = useContext (CartContext)

    return(
        <div>
            <Link className = "Carrito-link" to = "/carrito" >
                 <img src="https://i.ibb.co/vdDHR6v/carrito.png" className ="CartWidget" alt="img-carrito"height={40} width={40} />
                  <span className="carritoCantidad"> {carritoCount()} </span>
                  </Link>
        </div>
      
   ) 
}

export default CartWidget; 