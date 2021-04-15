import React from 'react';
import Head from "next/head";
import NavBar from "../components/NavBar";
import TitleForm from "../components/TitleForm";
import ContactFooter from "../components/ContactFooter";
import Input from "../components/Input";
import Button from "../components/Button";

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
                <div className="conteinerForme">
                    <Input background="transparent" placeholder="Qual é seu nome?"/>
                    <Input background="transparent" placeholder="Seu e-mail"marginBottom={false}/>
                    <Input background="transparent" placeholder="Seu telefone."/>
                    <Input background="transparent" placeholder="O que você precisa?" scale="large"/>
                    <Button background="yellow" scale="medium">Enviar mensagem <img src="aviao.svg"/> </Button> 
                </div>
                
            </main>

            <footer>
                <ContactFooter/>
            </footer>
            

        </div>
        

    )
}