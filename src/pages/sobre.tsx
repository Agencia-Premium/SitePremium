import React from 'react';
import NavBar from "../components/NavBar";
import GlobalStyle from "../styles/global";
import Footer from "../components/Footer";
import HeaderSobre from "../components/HeaderSobre";
export default function sobre() {
    return(
        <div className="container">
            <GlobalStyle/>
            <head>
                <title>Sobre Premium</title>
                <link rel="icon" href="/favicon.ico" />
            </head>

            <header>
                <NavBar/>
                <HeaderSobre/>
            </header>

            <main>

            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
        
    )
}
