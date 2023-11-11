import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/navbar/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/itemDetailContainer";
import  {CartProvider}  from "./context/CartContext";
import Cart from "./components/carrito";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import Checkout from "./components/formulario/Checkout";


const firebaseConfig = {
    apiKey: "AIzaSyB9FWxm0xgLiTRsNMB0UksC_WpVMuBlLyc",
    authDomain: "costamatera-afd92.firebaseapp.com",
    projectId: "costamatera-afd92",
    storageBucket: "costamatera-afd92.appspot.com",
    messagingSenderId: "919474685187",
    appId: "1:919474685187:web:1690181fbe777595359536",
    measurementId: "G-9LZMR3SB8K"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore (app)

const App = () => { 

  return (  
   
    <CartProvider>
      <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
     </BrowserRouter>
     </CartProvider>

  
  );
  }

  export default App
   

  






