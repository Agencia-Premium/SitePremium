// importar os componentes
import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import GlobalStyle from "../styles/global"; //estilo global.
import Title from "../components/Title";
import Cardes from "../components/Cardes";
import Clients from "../components/Clients";
import CardsComponent from "../components/CardsComent";
import Collaborator from "../components/Collaborator";
import Footer from '../components/Footer'

import { Collaborators } from "../components/Collaborator/constants";

export default function Home() {
  return (
    <div className="container">
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBar></NavBar>
      </header>

      <main>
        <Header></Header>
      </main>
      <section>
        <Title
          name="Nossos Serviços"
          description="Desempenhamos diversas atividades e funções que tem como objetivo trazer seu negócio para o online, ou fazer com que ele ganha mais força e atraia potênciais clientes."
        />
        <Cardes></Cardes>
      </section>

      <section>
        <Title
          name="Nossos Clientes"
          description="Estes são alguns de nossos clientes."
        />
        <Clients />
      </section>
      <section className="comment-user">
        <CardsComponent />
      </section>

      <Title name="Nossos Colaboradores" />
      <section className="collaborators">
        {/* Collaborators */}
        {Collaborators.map((colaborator, index) => {
          return (
            <Collaborator
              key={index}
              image={colaborator.image}
              name={colaborator.name}
              occupation={colaborator.occupation}
              description={colaborator.description}
              facebook={colaborator.socialMedia.facebook}
              instagram={colaborator.socialMedia.instagram}
              linkedin={colaborator.socialMedia.linkedin}
              twitter={colaborator.socialMedia.twitter}
            />
          );
        })}
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
