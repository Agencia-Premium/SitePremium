import React, { useState } from "react";
import Link from "next/link";
import { NavBarStyle, Left, Right, MobileIcon } from "./styles";
import MenuMobile from "../MenuMobile";

import { FaBars, FaToggleOn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

type NavbarProps = {
  // toggle?: () => void;
};

const NavBar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBarStyle>
        <MenuMobile isOpen={isOpen} toggle={toggle} />
        <Left>
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Logo de um troféu na cor amarela, escrito prêmium agência digital."
            />
          </Link>
        </Left>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <Right>
          <ul>
            <Link href="/">
              <li>Início</li>
            </Link>
            <Link href="/#services">
              <li>Serviços</li>
            </Link>
            <Link href="/sobre">
              <li>Sobre nós</li>
            </Link>
            {/* <Link href="/#vagas">
              <li>Vagas</li>
            </Link>  ocultado para aplicação futura. */}
            <Link href="/ourproject">
              <li>Projetos</li>
            </Link>
            <Link href="/contact">
              <li>Contato</li>
            </Link>
          </ul>
        </Right>
      </NavBarStyle>
    </>
  );
};
export default NavBar;
