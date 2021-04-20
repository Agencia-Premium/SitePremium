// importar os componentes

import { useState } from "react";

import NavBar from "../components/NavBar";
import MenuMobile from "../components/MenuMobile";
import Header from "../components/Header";
import GlobalStyle from "../styles/global"; //estilo global.
import Title from "../components/Title";
import Cardes from "../components/Cardes";
import Clients from "../components/Clients";
import CardsComponent from "../components/CardsComent";
import Footer from "../components/Footer";
import ColaborattorSlider from "../components/CollaboratorSlider";
import { Comments } from "../components/CardsComent/constants";
import Parceiros from "../components/Parceiros";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <header>
      <GlobalStyle />
        <title>Agência Premium</title>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <header>
        <NavBar toggle={toggle} />
        <MenuMobile isOpen={isOpen} toggle={toggle} />
      </header>

      <main>
        <Header />
      </main>
      <section>
        <Title
          name="Nossos Serviços"
          image="line_botton.svg"
          description="Desempenhamos diversas atividades e funções que tem como objetivo trazer seu negócio para o online, ou fazer com que ele ganha mais força e atraia potênciais clientes."
        />
        <Cardes></Cardes>
      </section>

      <section>
        <Title
          name="Nossos Clientes"
          description="Estes são alguns de nossos clientes."
          image="line_botton.svg"
        />
        <Clients />
      </section>
      <section className="comment-user">
        {Comments.map((item, index) => {
          return (
            <CardsComponent
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              align={item.align}
            />
          );
        })}
      </section>

      <section>
        <Title name="Nossos Parceiros" image="line_botton.svg" />
        <Parceiros />
      </section>

      <Title name="Nossos Colaboradores" image="line_botton.svg" />
      <section className="collaborators">
        <ColaborattorSlider />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
