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
            <S.LinkMenu href="#">Início</S.LinkMenu>
            <S.LinkMenu href="#">Serviços</S.LinkMenu>
            <S.LinkMenu href="#">Sobre nós</S.LinkMenu>
            <S.LinkMenu href="#">Equipe</S.LinkMenu>
            <S.LinkMenu href="#">Projetos</S.LinkMenu>
          </S.Menu>
        </S.MenuWrapper>
      </S.Wrapper>
    </>
  );
};

export default MenuMobile;
