import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {doc, getDoc} from "firebase/firestore"
import { db } from "../App";

const ItemDetailContainer = () => {
  const id = useParams().id;
  const [item, setItem] = useState(null);

  useEffect(() => {

    const docRef = doc(db, "Mates", id )
    getDoc(docRef)
    .then((resp)=>{
      setItem(
      {...resp.data(), id:resp.id}
    )})
  }, [id]);

  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
      
     
  ); 
};

export default ItemDetailContainer;
 /*{item ? (
        <ItemDetail producto={item} />
      ) : (
        <p>Producto no encontrado</p>
      )}*/