import React from "react";
import Link from "next/link";
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
            <Link href="/contact">
              <Button scale="xmedium" background="yellow">
                Entrar em contato
              </Button>
            </Link>
          </div>
        </div>
        <div className="container-footer">
          <div className="content">
            <div className="box-menu">
              <a href="/">
                <img
                  src="/logo.svg"
                  alt="logo premium na cor dourada com os textos na cor branca"
                />
              </a>
              <div className="content-menu">
                <h1>Menu</h1>
                <Link href="/">
                  <p>Início</p>
                </Link>
                <Link href="/#clientes">
                  <p>Clientes</p>
                </Link>
              </div>
              <div className="second-menu">
                <Link href="/contact">
                  <p>Contato</p>
                </Link>
                <Link href="/ourproject">
                  <p>Projetos</p>
                </Link>
                <Link href="/sobre">
                  <p>Sobre nós</p>
                </Link>
              </div>
              <div className="three-menu">
                <h1>Fique por dentro das novidades!</h1>

                <Input
                  background="gray"
                  scale="small"
                  marginBottomInput={false}
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
                <a href="https://www.linkedin.com/company/agencia-premium-marketing/">
                  <img src="/linkedin-footer.svg" alt="icone do linkedin" />
                </a>
                <a href="https://www.facebook.com/agenciapremiumro/">
                  <img src="/facebook-footer.svg" alt="icone do facebook" />
                </a>
                <a href="https://www.instagram.com/agenciapremiumro/">
                  <img src="/instagram-footer.svg" alt="icone do instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </S.Wrapper>
      <S.FooterMobile>
        <div className="box-footer">
          <div className="content">
            <div className="left-content">
              <h3>Pronto para começar ?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel nibh augue. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer vel nibh augue.
              </p>
            </div>
            <div className="right-content">
              <Link href="/contact">
                <Button scale="xsmall" background="yellow">
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <p> ® 2021 Agência Premium | All Rights Reserved | Privacity</p>
      </S.FooterMobile>
    </>
  );
};

export default Footer;
