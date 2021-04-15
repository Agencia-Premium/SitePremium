import React from 'react';
import Head from "next/head";
import NavBar from "../components/NavBar";
import TitleForm from "../components/TitleForm";
import ContactFooter from "../components/ContactFooter";

export default function contact() {
    return (
        <div className="container">
            {/* <head> */}
                <Head>
                    <title>Contato</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
            {/* </head> */}
            
            <header>
                <NavBar/>
            </header>
            
            <main>
                <TitleForm
                    name="Formulário de Contato"
                    description="Preencha o formulário e nossa equipe estrará 
                    em contato com você em até 24 horas."
                />
            </main>

            <footer>
                <ContactFooter/>
            </footer>
            

        </div>
        

    )
}