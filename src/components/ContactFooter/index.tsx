import React from "react";

import { ContainerContact } from "./style";

const FooterContact: React.FC = ({}) => {
  return (
    <>
      <ContainerContact>
        <div className="container-footer">
          <div>
            <img src="phone.svg" />
          </div>
          <a href="tel:6940028922">(69) 4002-8922</a>

          <div>
            <img src="mail.svg" />
          </div>

          <a href="mailto:contato@agenciapremium.com.br">contato@agenciapremium.com.br</a>
          <div>
            <img src="local.svg" />
          </div>

          <a href="https://maps.google.com/?q=-10.880192638184282,-61.94600214949904" target="_blank">Rua 2 de Abril</a>
        </div>
        <img className="circlo" src="circulo.svg" />
      </ContainerContact>
    </>
  );
};

export default FooterContact;
