import ItemListContainer from "./components/ItemListContainer";
import { ItemListContaine } from "./components/ItemListContainer";
import NavBar from "./components/navbar/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Especiales from "./components/matesEsp";
import Camioneros from "./components/matesCam";
import Torpedos from "./components/matesTorp";
import Imperiales from "./components/matesImp";
import ItemDetailContainer from "./components/itemDetailContainer";

export default function App() { 
  return (  
  <BrowserRouter>
   < NavBar/>
  <Routes>

    <Route path="/Especiales" element = {<Especiales/>}/>
    <Route path="/Camioneros" element = {<Camioneros/>}/>
    <Route path="/Torpedos" element =  {<Torpedos/>}/>
    <Route path="/Imperiales" element =  {<Imperiales/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer />}/>
    
 
  </Routes>
     <div>

  <ItemListContaine greeting="Bienvenidos a Costa Matera" />
          <ItemListContainer/>

      
    </div>
  </BrowserRouter>

  
   

  );
}





