import React, { useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import TitleForm from "../components/TitleForm";
import ContactFooter from "../components/ContactFooter";
import Input from "../components/Input";
import Button from "../components/Button";

export default function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

    console.log(name, email, phone, message)

  return (
    <div className="container">
      {/* <head> */}
      <Head>
        <title>Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* </head> */}

      <header>
        <NavBar />
      </header>

      <main>
        <TitleForm
          name="Formulário de Contato"
          description="Preencha o formulário e nossa equipe estrará 
                    em contato com você em até 24 horas."
        />
        <div className="conteinerForme">
          <Input
            background="transparent"
            placeholder="Qual é seu nome?"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            background="transparent"
            placeholder="Seu e-mail"
            marginBottom={false}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            background="transparent"
            placeholder="Seu telefone."
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <Input
            background="transparent"
            placeholder="O que você precisa?"
            scale="large"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button background="yellow" scale="medium">
            Enviar mensagem <img src="aviao.svg" />{" "}
          </Button>
        </div>
      </main>

      <footer>
        <ContactFooter />
      </footer>
    </div>
  );
}
