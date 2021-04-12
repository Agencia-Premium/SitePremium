// importar os componentes
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

export default function Home() {
  return (
    <div className="container">
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
      
    </div>
  )
}

