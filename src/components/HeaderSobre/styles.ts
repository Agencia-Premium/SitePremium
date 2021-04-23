import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  background-image: url("bg-linha.svg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerTrofeu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
      justify-content: center;
  }

  img {
    @media screen and (max-width: 768px) {
      opacity: 0.3;
      width: 300px;
      height: 398px;
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
    font-family: "Inter";
    font-weight: 500;
    text-align: right;

    @media screen and (max-width: 768px) {
      font-size: 3.2rem;
      text-align: center;
    }
  }

  span {
    width: 50%;
    line-height: 80px;
    font-weight: 700;
    color: #ffffff;
    font-size: 9rem;
    text-align: right;

    @media screen and (max-width: 768px) {
      font-size: 5rem;
      line-height: 10px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
