import React from "react";
import NavBar from "../components/NavBar";
import GlobalStyle from "../styles/global";
import Footer from "../components/Footer";
import HeaderSobre from "../components/HeaderSobre";
import CardsSobre from "../components/CardsSobre";
import Coments from "../components/Coments";
import ImagemCenter from "../components/ImagemCenter";

export default function sobre() {
  return (
    <div className="container">
      <GlobalStyle />
      <head>
        <title>Sobre Premium</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header>
        <NavBar />
        <HeaderSobre />
      </header>

      <main className="CardsSobre">
        <CardsSobre
          image="valores.svg"
          title="Nossos Valores:"
          subtitle="Valorização dos nossos colaboradores; Ter Ética e Princípios acima de tudo; Promover a inovação e o uso de novas tecnologias como cerne do nosso negócio;"
          alt = "Nossos Valores"            
        />
        <CardsSobre
          image="missao.svg"
          title="Nossos Missão:"
          subtitle="Promover a resolução de problemas de nossos clientes e da sociedade por meio do Marketing, da Tecnologia e da Inovação com agilidade, ética e transparência."
          alt = "Nossos Missão"            
        />
      </main>
      <section>
        <Coments 
          name="Conheça nosso História"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum"
        />
      </section>

      <section>
        <ImagemCenter imagem="trilha.webp"/>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
