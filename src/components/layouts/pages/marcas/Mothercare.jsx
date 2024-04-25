import React from 'react';
import { Link } from 'react-router-dom';
import Carro from '../interfaz/Carro';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../interfaz/ProductItem"

function Chevignon() {
  const productos = [
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_azul.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_doble_gris.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_doble.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_gris_oscuro.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_gris.jpg", cantidad: 1},                                         
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_naranja.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_negro.jpg", cantidad: 1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_rojo.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_rosa.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_blanca_con_mate.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_blanca.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_grande_gris_claro.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_grande_gris_mate.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_gris_clara.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_mate.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_mediana_gris.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_negra.jpg" , cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/silla_para_bebe_azul.jpg", cantidad:1 }, 
    { imageUrl: "/src/assets/img/prendas_mothercare/silla_para_bebe_roja.jpg", cantidad:1 },
    { imageUrl: "/src/assets/img/prendas_mothercare/silla-para_bebe_gris.jpg" , cantidad:1 },
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
        <img src="/src/assets/img/mama_bebe_motherCare.jpg" style={{ width: '100%', borderBottom: 'solid 2px black', marginTop: '9.5%' }} alt="" />
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
