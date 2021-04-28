import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes `
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  background-image: url("bg-linha.svg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

export const ContainerTrofeu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 920px) {
      justify-content: center;
  }

  img {

    animation: ${appearFromLeft} 2s;

    @media screen and (max-width: 920px) {
      opacity: 0.3;
      max-width: 100%;
      /* width: 300px;
      height: 398px; */
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  min-width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    width: 50%;
    font-size: 4.3rem;
    color: #ffffff;
    font-family: "Ubuntu";
    font-weight: 500;
    text-align: right;

    @media screen and (max-width: 920px) {
      font-size: 3.2rem;
      text-align: center;
    }

    @media screen and (max-width: 426px) {
      font-size: 2.2rem;
    }
  }

  span {
    width: 50%;
    line-height: 80px;
    font-weight: 700;
    color: #ffffff;
    font-size: 9rem;
    text-align: right;
    font-family: "Ubuntu";

    @media screen and (max-width: 920px) {
      font-size: 5rem;
      line-height: 50px;
      text-align: center;
    }

    @media screen and (max-width: 426px) {
      font-size: 3.2rem;
    }
  }

  @media screen and (max-width: 920px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
