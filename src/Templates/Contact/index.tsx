import React, { useState } from "react";
import Head from "next/head";

import api from "../../services/api";

import NavBar from "../../components/NavBar";
import TitleForm from "../../components/TitleForm";
import ContactFooter from "../../components/ContactFooter";
import Input from "../../components/Input";
import Button from "../../components/Button";

import * as S from "./styles";

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

  const ValidateForm = async () => {
    if (
      name !== "" &&
      email !== "" &&
      email.includes("@") &&
      email.includes(".") &&
      phone !== "" &&
      message !== ""
    ) {
      try {
        setProgress(1);
        api
          .post("/forms", { name, email, phone, message })
          .then((result) => {
            console.log(result.data);
            setProgress(2);
          })
          .catch((err) => {
            setProgress(3);
          });

        console.log("Validei");
        setError(false);
      } catch (err) {
        setProgress(3);
      }
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
            {error && (
              <div className="container-error">
                <span>Preencha os campos corretamente!</span>
              </div>
            )}
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
                <Button
                  background="yellow"
                  scale="medium"
                  onClick={ValidateForm}
                >
                  Enviar mensagem <img src="aviao.svg" />
                </Button>
              </>
            )}
            {progress === 1 && (
              <S.WrapperIcon>
                <img src="bigaviao.svg" className="aviao" alt="avião na cor amarela" />
                <span>Enviando...</span>
              </S.WrapperIcon>
            )}
            {progress === 2 && (
              <S.WrapperIcon>
                <img src="congratulations.svg" className="congratulations" alt="cone colorido com uma mensagem de sucesso" />
                <span className="success">Sucesso!!</span>
              </S.WrapperIcon>
            )}
            {progress === 3 && (
              <S.WrapperIcon>
                <img src="error.svg" alt="imagem escrito error na cor vermelha" />
              </S.WrapperIcon>
            )}
          </div>
        </main>

        <footer>
          <ContactFooter />
        </footer>
      </S.Wrapper>
    </>
  );
};

export default ContactTemplate;
