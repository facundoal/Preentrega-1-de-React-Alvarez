import { NavLink } from "react-router-dom"
import CartWidget from "../Carrito/CartWidget";
import './navbar.css'


const NavBar = () =>{

    return( 
        
     <header>
        
        <nav>
            <ul>
                <li>
                <NavLink className = "nav-link"  to="/"> Costa matera </NavLink>
                </li>

                <li>
                <NavLink className = "nav-link"  to="/productos/Camioneros"> Mates Camioneros </NavLink>
                </li>
                <li>
                <NavLink className = "nav-link" to="/productos/Torpedos"> Mates Torpedos </NavLink>
                </li>
                <li>
                <NavLink className = "nav-link" to="/productos/Imperiales"> Mates Imperiales </NavLink>
                </li>
                <li>
                <CartWidget/>
                </li>
            </ul>
        </nav>
    </header>

    
    )}


    export default NavBar; 