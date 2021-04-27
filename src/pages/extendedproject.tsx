import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import GlobalStyle from '../styles/global';
import { Card } from '../components/ImageProject/constants';
// import {  } from '../components/ExtendedProject';


export default function extendedproject() {
    return(
        <div className="container">
            <GlobalStyle />
            <header>
                <title>O projeto</title>
                <link rel="icon" href="favicon.ico" />
            </header>

            <nav>
                <NavBar />
            </nav>

            <main>
                <div className="container">
                    {/* {Card.map((item, index)=>{
                        return <ExtendedProject key={index} imagem={item.imagem} titulo={item.titulo} subTitulo={item.subTitulo} />
                    })} */}

                </div>
            </main>

            <section>

            </section>

            <section>

            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}