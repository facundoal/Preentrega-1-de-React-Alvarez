import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const productos = [
    { id: 1, nombre: 'Mate Camionero', precio: 6000, tamaño: 'Mediano', imagen: 'https://i.ibb.co/0fQhX1G/mate-camionero-2.jpg', descripcion : "Por su corte en la calabaza es de boca ancha, que sirve de protección ante posibles derrames de la infusión" },
    { id: 2, nombre: 'Mate Torpedo', precio: 5000, tamaño: 'Pequeño', imagen: 'https://i.ibb.co/rkWRFLG/mate-torpedo.png', descripcion : "El Mate Torpedo es uno de los auténticos Mate uruguayos. Gracias a su férula de acero inoxidable que permite una mejor experiencia de bebida" },
    { id: 3, nombre: 'Mate Imperial', precio: 7000, tamaño: 'Grande', imagen: 'https://i.ibb.co/1v05jWt/mate-imperial-1.webp' , descripcion : "Trabajo artesanal en alpaca y cuero, logrando llevar la tradición argentina al maximo en cada mate. Base de 4 patas reforzadas. Fleje cincelado y virola lisa de alpaca" },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoEncontrado = productos.find((item) => item.id === Number(id));
    setProducto(productoEncontrado);
  }, [id]);

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
