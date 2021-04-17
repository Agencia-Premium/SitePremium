import React, { useState } from "react";
import Link from "next/link";
import { NavBarStyle, Left, Right, MobileIcon } from "./styles";
import MenuMobile from "../MenuMobile";

import { FaBars, FaToggleOn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavBar: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

 const toggle = () => {
     setIsOpen(!isOpen);
 }

  return (
    <>
      <NavBarStyle>
        <Left>
          <img
            src="logo.svg"
            alt="Logo na cor amarela, escrito prêmium agência digital."
          />
        </Left>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        {isOpen ? <MenuMobile onClick={toggle} /> : <></>}
        <Right>
          <ul>
            <Link href="/">
              <li>Início</li>
            </Link>
            <Link href="#">
                <li>Serviços</li>
            </Link>
            <Link href="sobre">
                <li>Sobre nós</li>
            </Link>
            <Link href="#">
                <li>Equipe</li>
            </Link>
            <Link href="#">
                <li>Projetos</li>
            </Link>
            <Link href="contact">
                <li>Contato</li>
            </Link>
          </ul>
        </Right>
      </NavBarStyle>
    </>
  );
};
export default NavBar;
