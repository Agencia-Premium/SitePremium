// importar os componentes
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'//estilo global.
import Title from '../components/Title'
import Cardes from '../components/Cardes'
import TitleMid from '../components/TitleMid'
import CardesClient from '../components/CardesClient'

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
        </section>

        <footer>
          
        </footer>
      
    </div>
  )
}

