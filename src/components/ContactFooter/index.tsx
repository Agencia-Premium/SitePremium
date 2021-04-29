import React from "react";
import { Container } from "../Container";

import { ContainerContact } from "./style";

const FooterContact: React.FC = ({}) => {
  return (
    <>
      <ContainerContact>
        <Container>
          <div className="container-footer">
            <div className="content">
              <img src="phone.svg" alt="icone do telefone" />
              <a href="tel:6940028922">(69) 4002-8922</a>
            </div>

            <div className="content">
              <img src="mail.svg" alt="icone do email" />
              <a href="mailto:contato@agenciapremium.com.br">
                contato@agenciapremium.com.br
              </a>
            </div>

            <div className="content">
              <img src="local.svg" alt="icone de localização" />
              <a
                href="https://maps.google.com/?q=-10.880192638184282,-61.94600214949904"
                target="_blank"
              >
                Rua 2 de Abril
              </a>
            </div>
          </div>
          <img className="circlo" src="circulo.svg" />
        </Container>
      </ContainerContact>
    </>
  );
};

export default FooterContact;
