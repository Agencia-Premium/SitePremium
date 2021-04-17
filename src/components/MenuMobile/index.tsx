import React from "react";
import Button from "../Button";
import { FaTimes } from 'react-icons/fa';
import * as S from "./styles";

type MenuMobileProps = {
  onClick: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ onClick }) => {
  return (
    <>
      <S.Wrapper>
        <S.Icon onClick={onClick}>
          <FaTimes color="#fff" size={32} />
        </S.Icon>
        <img src="logo.svg" />
        <a>Início</a>
        <a>Serviços</a>
        <a>Sobre nós</a>
        <a>Equipe</a>
        <a>Projetos</a>
        <Button scale="medium" background="yellow">Entre em contato</Button>
      </S.Wrapper>
    </>
  );
};

export default MenuMobile;
