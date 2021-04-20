import React, { useState } from 'react'
import Head from "next/head";

import NavBar from "../../NavBar";
import TitleForm from "../../TitleForm";
import ContactFooter from "../../ContactFooter";
import Input from "../../Input";
import Button from "../../Button";

import * as S from  './styles'


const ContactTemplate: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  
    const [error, setError] = useState(false);
    const [progress, setProgress] = useState(0);
  
    // Progress 0 = None
    // Progress 1 = Enviando
    // Progress 2 = Success
    // Progress 3 = Error
  
    const ValidateForm = () => {
      if (name !== "" && email !== "" && phone !== "" && message !== "") {
        console.log("Validei");
        setError(false);
        setProgress(1);
      //   setProgress(2);
      } else {
        console.log("Não validei");
        setError(true);
      }
    };

    return (
        <>
         <S.Wrapper>
      <Head>
        <title>Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          {progress === 0 && (
            <>
              <Input
                background="transparent"
                placeholder="Qual é seu nome?"
                onChange={(e) => setName(e.target.value)}
                value={name}
                borderColor={error && true}
              />
              <Input
                background="transparent"
                placeholder="Seu e-mail"
                marginBottom={false}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                borderColor={error && true}
              />
              <Input
                background="transparent"
                placeholder="Seu telefone."
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                borderColor={error && true}
              />
              <Input
                background="transparent"
                placeholder="O que você precisa?"
                scale="large"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                borderColor={error && true}
              />
              <Button background="yellow" scale="medium" onClick={ValidateForm}>
                Enviar mensagem <img src="aviao.svg" />
              </Button>
            </>
          )}
          {progress === 1 && (
            <S.WrapperIcon>
              <img src="bigaviao.svg" className="aviao" />
              <span>
                  Enviando...
              </span>
            </S.WrapperIcon>
          )}
          {/* {progress === 2 && (
              <WrapperIcon>
                  <img src="congratulations.svg" className="congratulations" />
              </WrapperIcon>
          )} */}
        </div>
      </main>

      <footer>
        <ContactFooter />
      </footer>
    </S.Wrapper>
  );

        </>
    )
}

export default ContactTemplate;