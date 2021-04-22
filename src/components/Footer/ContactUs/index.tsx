import React from "react";
import { Send } from "@styled-icons/fluentui-system-regular/Send";
import * as S from "./styles";
import Input from "../../Input";
import Button from "../../Button";
const Footer: React.FC = () => {
  return (
    <>
      <S.Wrapper>
        <div className="contato">
          <div className="left">
            <h1>Pronto para começar ?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel nibh augue. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer vel nibh augue.
            </p>
          </div>

          <div className="right">
            <Button scale="xmedium" background="yellow">
              Entrar em contato
            </Button>
          </div>
        </div>
        <div className="container-footer">
          <div className="content">
            <div className="box-menu">
              <div className="circle-one" />
              <img src="logo.svg" alt="logo premium na cor dourada com os textos na cor branca" />
              <div className="content-menu">
                <h1>Menu</h1>
                <p>Início</p>
                <p>Clients</p>
                <p>Colaboradores</p>
              </div>
              <div className="second-menu">
                <p>Contato</p>
                <p>Quem somos</p>
              </div>
              <div className="three-menu">
                <h1>Fique por dentro das novidades!</h1>

                <Input
                  background="gray"
                  scale="small"
                  marginBottom={false}
                  placeholder="Insira seu e-mail"
                />
                <Button scale="small" background="gray">
                  Enviar
                </Button>
              </div>
            </div>
            <div className="diviser">
              <hr />
            </div>
            <div className="copyright">
              <p>® 2021 Agência Premium | All Rights Reserved | Privacity</p>
              <div className="social-media">
                <a href="#">
                  <img src="linkedin-footer.svg" alt="icone do linkedin" />
                </a>
                <a href="#">
                  <img src="facebook-footer.svg" alt="icone do facebook" />
                </a>
                <a href="#">
                  <img src="instagram-footer.svg" alt="icone do instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </S.Wrapper>
      <S.FooterMobile>
        <p> ® 2021 Agência Premium | All Rights Reserved | Privacity</p>
      </S.FooterMobile>
    </>
  );
};

export default Footer;
