// importar os componentes
<<<<<<< HEAD
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'//estilo global.
import Title from '../components/Title'
import Cardes from '../components/Cardes'
import TitleMid from '../components/TitleMid'
import CardesClient from '../components/CardesClient'
import CardsComent from '../components/CardsComent'
import ContainerComentario from '../components/CardsComent'
=======
import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import GlobalStyle from "../styles/global"; //estilo global.
import Title from "../components/Title";
import Cardes from "../components/Cardes";
import TitleMid from "../components/TitleMid";

import Collaborator from "../components/Collaborator";

import { Collaborators } from "../components/Collaborator/constants";
>>>>>>> f5e457f3dd8139d5b3f97afb8415768e51d79a97

export default function Home() {
  return (
    <div className="container">
<<<<<<< HEAD
      <GlobalStyle/>
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
          <Title></Title>
          <Cardes></Cardes>
        </section>
          
        <section>
          <TitleMid></TitleMid>
        </section>

        <section>
          <CardesClient></CardesClient>
          <ContainerComentario></ContainerComentario>
        </section>

        <footer>
          
        </footer>
      
=======
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
        <TitleMid></TitleMid>
      </section>

      <section className="collaborators">
        {/* Collaborators */}
        <Title name="Nossos Colaboradores" />
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

      <footer></footer>
>>>>>>> f5e457f3dd8139d5b3f97afb8415768e51d79a97
    </div>
  );
}
