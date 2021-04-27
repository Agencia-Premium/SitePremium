import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    font-family: "Ubuntu";
  }
`;

export const NameTitulo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: "Ubuntu";
  text-align: center;
  color: rgba(223, 223, 223, 1);
  margin: 82px 0 0;

  @media screen and (max-width: 526px) {
    font-size: 28px;
  }
`;


export const SubTitulo = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  font-family: "Ubuntu";
  color: rgba(223, 223, 223, 1);
  margin: 35px 0 0;
  /* width: 386px; */
  /* height: 52px; */
  line-height: 24px;

  @media screen and (max-width: 526px) {
    font-size: 14px;
    padding: 0 20px;
  }
`;