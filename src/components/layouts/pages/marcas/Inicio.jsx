import React from 'react';
import { Link } from 'react-router-dom';
import Foother from '../interfaz/Foother';
import Head from './../interfaz/Head';
function Inicio() {
  let slideIndex = 1;

  const changeSlide = (n) => {
    showSlide(slideIndex += n);
  }

  const currentSlide = (n) => {
    showSlide(slideIndex = n);
  }

  const showSlide = (n) => {
    let slides = document.getElementsByClassName("carousel-img");
    if (n > slides.length) { slideIndex = 1 }{

    }if (n = 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  return (
    <>
      <header className="cabeza">
        <Link className="logo" to="/">
          <h1>GCO</h1>
        </Link>
      </header>
      <main className="contenido">
       <Head></Head>
        <div className="carousel">
          <Link to="/Americanino">
            <img className="carousel-0img active" src="/src/assets/img/AMERICANINO_Walper.png" alt="Imagen 1" />
          </Link>
          <Link to="/Naf-naf">
            <img className="carousel-img" src="/src/assets/img/naf_naf_walper_.png" alt="Imagen 2" />
          </Link>
          <Link to="/Chevignon">
            <img className="carousel-img" src="/src/assets/img/chevignono_walper.jpg" alt="Imagen 3" />
          </Link>
          <Link to="/MotherCare">
            <img className="carousel-img" src="/src/assets/img/mother_care_walper.jpg" alt="Imagen 4" />
          </Link>
          <button className="carousel-btn prev" onClick={() => changeSlide(-1)}>&#10094;</button>
          <button className="carousel-btn next" onClick={() => changeSlide(1)}>&#10095;</button>
        </div> 
      </main>
      <Foother/>
      
    </>
  );
}

export default Inicio;
