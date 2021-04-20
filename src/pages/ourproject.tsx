import React from 'react';
import GlobalStyle from "../styles/global";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import TitleProject from '../components/TitleProject';
import Coments from '../components/Coments';

export default function ourproject() {
  return(
    <div className="container">
      <GlobalStyle />
      <head>
        <title>Nossos Projetos</title>
        <link rel="icon" href="favicon.ico"/>
      </head>

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

      <section>
        
      </section>
      
      <footer>
        <Footer />
      </footer>

    </div>
  )
}