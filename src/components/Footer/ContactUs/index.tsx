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
            <h6>Pronto para começar ?</h6>
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
              <img src="logo.svg" />
              <div className="content-menu">
                <h6>Menu</h6>
                <p>Início</p>
                <p>Clients</p>
                <p>Colaboradores</p>
              </div>
              <div className="second-menu">
                <p>Contato</p>
                <p>Quem somos</p>
              </div>
              <div className="three-menu">
                <h6>Fique por dentro das novidades!</h6>

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
                  <img src="linkedin-footer.svg" />
                </a>
                <a>
                  <img src="facebook-footer.svg" />
                </a>
                <a>
                  <img src="instagram-footer.svg" />
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
