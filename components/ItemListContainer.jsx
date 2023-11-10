import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../App";

const ItemListContainer = () => {
  const categoria  = useParams().categoria;
  const [titulo] = useState([""]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const ProductosRef = collection(db, "Mates", )

    const q = categoria ? query(ProductosRef, where("categoria" , "==", categoria)):ProductosRef
    
    getDocs( q )
    .then((resp) => {
      const productosData = resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setProductos(productosData);
      setLoading(false);
    })
   },
  
  [categoria]); 

 return (
    <div>
      <h1>lista de mates </h1>
        
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList productos={productos} titulo ={titulo} />
      )}
    </div>
  );
};

export default ItemListContainer;



//anterior codigo de itemListContainer

/*import ItemList from "./itemList";


const ItemListContainer = () => {

  const mates = [
    { id: 1, categoria:'Camionero', nombre: 'Mate Camionero', precio: 6000, tamaño: 'Mediano', imagen: 'https://i.ibb.co/0fQhX1G/mate-camionero-2.jpg' },
    { id: 2, categoria:'Torpedo', nombre: 'Mate Torpedo', precio: 5000, tamaño: 'Pequeño', imagen: 'https://i.ibb.co/rkWRFLG/mate-torpedo.png' },
    { id: 3, categoria:'Imperial', nombre: 'Mate Imperial', precio: 7000, tamaño: 'Grande', imagen: 'https://i.ibb.co/1v05jWt/mate-imperial-1.webp' },
  ];

  return (
    <div>
      <h1>Lista de Mates</h1>
      <ItemList productos={mates} />
    </div>
  );
};


export default ItemListContainer;
*/






