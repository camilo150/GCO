import React from 'react';
import { Link } from 'react-router-dom';
import Carro from '../interfaz/Carro';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../interfaz/ProductItem"

function Americanino() {
  const productos = [
    { imageUrl: "/src/assets/img/prendas_americanino/blusa_verde_Lima_mujer_americanino.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camisa-roja_mujer_americanino.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camisa_negra_americanino.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camisa_verde_lima_mujer_americanino.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta-verde-militar_americanino.webp", cantidad: 1},                                         
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_blanca_americanino.webp", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_blanca_mujer_americanino.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_gris_americanino.webp", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_naranja_americanino.webp", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_negra_americanino.webp", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_blanca_americanino.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_camionero_azul_americanino.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_deportiva_negra_americanino.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_negra_americanino.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_rosa_americanio.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/medias_azules_americanino.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/medias_rosa_americanino.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/medias_vainilla_americanino.jpg", cantidad:1 }, 
    { imageUrl: "/src/assets/img/prendas_americanino/medias_vinotinto_americanino.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_americanino/tobillera_vinotinto_americanino.jpg", cantidad:1 },
  ];

  return (
    <>
      <header className="cabezaAmericanino">
        <Link className="logoAmericanino" to="/">
          <h1>GCO</h1>
        </Link>
        <Carro />
      </header>
      <Head />
      <main id='mainAMERICANINO'>
        <section id="AMERICANINO">
          <img src="src/assets/img/wap" alt="" />
          <section className="RopasAMERICANINO">
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

export default Americanino;

