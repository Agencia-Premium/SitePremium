import styled, { keyframes } from "styled-components";
import { darken } from "polished";
import Link from "next/link";
import { MenuMobileProps } from ".";

export const Wrapper = styled.div<MenuMobileProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;

  background: rgba(20, 20, 20, 0.45);
  backdrop-filter: blur(20px);
  /* background-color: linear-gradient(111.34deg, #545454 0%, #0B0B0B 100%); */
    
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const MenuWrapper = styled.div`
  color: #fff;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(5, 60px);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none !important;
    color: rgba(241, 241, 241, 1);
    font-weight: 700;
    font-family: "Inter";
    cursor: pointer;
    :hover {
      color: ${darken(0.2, "rgba(241, 241, 241, 1)")};
      transition: 0.2s ease-in-out;
    }
  }
`;

export const LinkMenu = styled(Link)`
  display: flex;
`;

export const Icon = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;
