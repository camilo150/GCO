import React from 'react';
import { Link } from 'react-router-dom';
import Carro from '../interfaz/Carro';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../interfaz/ProductItem"

function Chevignon() {
  const productos = [
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Amarillo_Chevignon.jpeg", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Azul_chevignon.jpg", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Mujer_blanco_chevignon.jpg", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Mujer_chevignon.jpg", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisa_negro_gris.jpg", cantidad: 1},                                         
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaBlanca_chevignon.jpg", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaBlancaML_chevignon.jpg", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaNegraML_chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaRojacuadro_chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/camiseta_Blanca_chevignon.jpeg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/chaqueta_Chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/jean_AzulClaro_chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/jean_Blanco_chevignon.jpeg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/jean_Negro_chevignon.png" , cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/zapato_azul_chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/zapato_blanco_chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/zapato_blanco_con_negro_chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/Camiseta_NegraGris_chevignon.jpg", cantidad:1 }, 
    { imageUrl: "src/assets/img/prendas_Chevignon/camiseta_Negra_chevignon.jpg", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzoMujer_chevignon.jpeg", cantidad:1 },
  ];

  return (
    <>
      <header className="cabezaChevignon">
        <Link className="logoChevignon" to="/">
          <h1>GCO</h1>
        </Link>
        <Carro />
      </header>
      <Head />
      <main id='mainCHEVIGNON'>
        <section id="CHEVIGNON">
        <img src="src/assets/img/chevignonPresentacion.png" style={{width:"100%",}} alt="chevignon portada" />
          <section className="RopasCHEVIGNON">
            {productos.map((producto, index) => (
              <ProductItem key={index} imageUrl={producto.imageUrl} cantidad={producto.cantidad} />
            ))}
          </section>
        </section>
      </main>
      <Foother />
    </>
  );
}

export default Chevignon;