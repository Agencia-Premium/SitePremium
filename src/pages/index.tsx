import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import Title from '../components/Title'

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
        </section>
        <footer>
          
        </footer>
      
    </div>
  )
}

