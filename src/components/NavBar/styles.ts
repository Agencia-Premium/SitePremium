import styled, { keyframes } from "styled-components";
import { darken } from "polished";

export const appearFromTop = keyframes`
   from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavBarStyle = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  animation: ${appearFromTop} 1s;
`;

export const Left = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Right = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      font-size: 2.2rem;
      font-weight: bold;
      color: rgba(241, 241, 241, 1);
      font-family: "Inter";
      cursor: pointer;
      padding: 0 24px 0 0;
      transition: all 0.2s ease-in-out;

      :hover {
        color: ${darken(0.12, "rgba(241,241,241,1)")};
      }
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
  }
`;
