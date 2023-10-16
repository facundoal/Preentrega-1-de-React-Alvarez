import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget";
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
                <NavLink className = "nav-link"  to="/Camioneros"> Mates Camioneros </NavLink>
                </li>
                <li>
                <NavLink className = "nav-link" to="/Torpedos"> Mates Torpedos </NavLink>
                </li>
                <li>
                <NavLink className = "nav-link" to="/Imperiales"> Mates Imperiales </NavLink>
                </li>
                <li>
                <NavLink className = "nav-link" to="/Especiales"> Mates Especiales </NavLink>
                </li>
                <li>
                <> < CartWidget/> </>
                </li>
            </ul>
        </nav>
    </header>

    
    )}


    export default NavBar; 