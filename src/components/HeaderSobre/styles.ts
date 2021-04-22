import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("Vector 2.svg");
  background-position: -119px -90px;
  background-size: cover;
  margin-bottom: 100px;
`;
export const BkgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("Vector 1.svg");
  background-position: -327px -4px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 8%;
  top: 26px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    @media screen and (max-width: 768px) {
      width: 200px;
      opacity: 0.3;
    }
  }
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 17%;
  bottom: 40px;
  top: -52px;

  h1 {
    font-size: 4.3rem;
    color: #ffffff;
    font-family: "Inter";
    text-align: right;
    font-weight: 500;
    line-height: 70px;
  }
  span {
    font-weight: 700;
    font-size: 9rem;
  }
  @media screen and (max-width: 768px) {
    position: initial;
    align-items: center;
    width: 100%;

    h1 {
      text-align: center;
    }
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
      line-height: 60px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
