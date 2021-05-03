import React, { useState, useEffect } from "react";
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
        setTimeout(function () {
          setProgress(1);
        }, 500);
        setTimeout(function () {
          api
            .post("/forms", { name, email, phone, message })
            .then((result) => {
              setProgress(2);
            })
            .catch((err) => {
              setProgress(3);
            });
        }, 5000);
        setError(false);
      } catch (err) {
        setProgress(3);
      }
    } else {
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
          <TitleForm name="Entre em contato" />
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
                  // type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  borderColor={error && true}
                  mask="(99)99999-9999"
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
                  Enviar mensagem <img src="/aviao-contact.svg" alt="Botão de Enviar Mensagem" />
                </Button>
              </>
            )}
            {progress === 1 && (
              <S.WrapperIcon>
                <img
                  src="aviao.webp"
                  className="aviao"
                  alt="avião na cor amarela"
                />
                <span>Enviando...</span>
              </S.WrapperIcon>
            )}
            {progress === 2 && (
              <S.WrapperIcon>
                <img
                  src="congratulations.webp"
                  className="congratulations"
                  alt="cone colorido com uma mensagem de sucesso"
                />
                <span className="success">Mensagem enviada com sucesso 😄</span>
              </S.WrapperIcon>
            )}
            {progress === 3 && (
              <S.WrapperIcon>
                <img
                  src="error.webp"
                  className="error"
                  alt="imagem escrito error na cor vermelha"
                />
                <span className="error-text">Erro ao enviar a mensagem 😥</span>
              </S.WrapperIcon>
            )}
          </div>
        </main>
      </S.Wrapper>
      <footer>
        <ContactFooter />
      </footer>
    </>
  );
};

export default ContactTemplate;
