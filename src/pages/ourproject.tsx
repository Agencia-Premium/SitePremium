import React from 'react';
import GlobalStyle from "../styles/global";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import TitleProject from '../components/TitleProject';
import Coments from '../components/Coments';
import { Card } from '../components/ImageProject/constants';
import ImageProject from '../components/ImageProject';

export default function ourproject() {
  return(
    <div className="container">
      <GlobalStyle />
      <header>
        <title>Nossos Projetos</title>
        <link rel="icon" href="favicon.ico"/>
      </header>

      <header>
        <NavBar />
      </header>
      <section>
        <TitleProject 
        subtitle="Alguns de nossos"
        title="projetos"
        imagem="vectorProject.svg"
        />
      </section>

      <main>
        <Coments name="Nosso projetos"/>
      </main>

      <section className="gallery">
        { Card.map((item, index)=>{
          return <ImageProject key={index} imagem={ item.imagem} titulo={item.titulo} subTitulo={item.subTitulo}  arrow="arrow.svg"/>
        })}     
      </section>
      
      <footer>
        <Footer />
      </footer>

    </div>
  )
}