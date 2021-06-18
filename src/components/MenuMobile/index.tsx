import React from "react";
import { FaTimes } from "react-icons/fa";
import * as S from "./styles";

export type MenuMobileProps = {
  isOpen: boolean;
  toggle?: () => void;
};

const MenuMobile: React.FC<MenuMobileProps> = ({  isOpen, toggle }) => {
  return (
    <>
      <S.Wrapper isOpen={isOpen} onClick={toggle}>
        <S.Icon onClick={toggle}>
          <FaTimes color="#fff" size={32} />
        </S.Icon>
        <S.MenuWrapper>
          <S.Menu>
            <S.LinkMenu href="/">Início</S.LinkMenu>
            <S.LinkMenu href="/#services">Serviços</S.LinkMenu>
            <S.LinkMenu href="/sobre">Sobre nós</S.LinkMenu>
            {/* <S.LinkMenu href="/#vagas">Vagas</S.LinkMenu> ocultado para futura aplicação.*/} 
            <S.LinkMenu href="/ourproject">Projetos</S.LinkMenu>
            <S.LinkMenu href="/contact">Contato</S.LinkMenu>
          </S.Menu>
        </S.MenuWrapper>
      </S.Wrapper>
    </>
  );
};

export default MenuMobile;
