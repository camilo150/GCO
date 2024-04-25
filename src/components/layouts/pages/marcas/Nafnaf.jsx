import React from 'react';
import { Link } from 'react-router-dom';
import Carro from '../interfaz/Carro';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../interfaz/ProductItem"

function Chevignon() {
  const productos = [
    { imageUrl: "src/assets/img/prendas_nafnaf/abrigo_azul_claro_mujer_nafna.png", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/abrigo_gris_mate_mujer_nafnaf.png", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/abrigo_gris_mujer_nafnaf.png", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/abrigo_verde_mujer_nafnaf.png", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/camisa_azul_mujer_nafnaf.png" , cantidad: 1},                                         
    { imageUrl: "src/assets/img/prendas_nafnaf/camisas_blanca_mujer_nafnaf.png", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/camiseta_negra_mujer_nafnaf.png", cantidad: 1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/enterizo_cafe_mujer_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/enterizo_gris_mujer_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/enterizo_negro_mujer_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/enterizo_rojo_mujer_nafnaf.png" , cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/pantalon_acampanado_azul_mujer_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/pantalon_acampanado_vinotinto_mujer_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/pantalon_cargo_mujer_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/pantalon_negro_mujer_nafnaf.png" , cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/short_verde_mujer_nafnaf.png" , cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/zapato_beige_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/zapatos_cafes_nafnaf.png", cantidad:1 }, 
    { imageUrl: "src/assets/img/prendas_nafnaf/zapatos_leopardo_nafnaf.png", cantidad:1 },
    { imageUrl: "src/assets/img/prendas_nafnaf/zapatos_blanco_nafnaf.png" , cantidad:1 },
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
        <img style={{ width: "100%", marginTop: "10%" }} src="src/assets/img/naf_naf_inicio.png" alt="" />
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