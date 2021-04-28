import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-90px) translateY(90px);
  }
  20% {
    opacity: 1;
    transform: translateX(50px) translateY(0px);
  }
  40% {
    transform: rotate(-8deg);
  }
  
`;

const appearFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  60% {
    opacity: 1;
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const ContainerOur = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu";
  font-weight: 700;
  color: #dfdfdf;

  @media screen and (max-width: 880px) {
    flex-direction: column-reverse;
    margin-top: 20px;
  }
`;
export const Left = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    animation: ${appearFromLeft} 6s;

    @media screen and (max-width: 780px) {
      width: 80%;
    }
  }
`;

export const Right = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: ${appearFromRight} 4s;

  h2 {
    font-size: 4.6rem;

    @media screen and (max-width: 1020px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 426px) {
      font-size: 2.2rem;
    }
  }

  h1 {
    font-size: 8.4rem;

    @media screen and (max-width: 1020px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 426px) {
      font-size: 4rem;
    }
  }

  img {
    @media screen and (max-width: 1020px) {
      width: 220px;
    }
  }
`;
