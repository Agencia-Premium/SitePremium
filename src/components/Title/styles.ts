import styled from "styled-components";

export const NameTitulo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: "Ubuntu";
  text-align: center;
  color: rgba(223, 223, 223, 1);
  margin: 82px 0 0;
`;
export const LineBotton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SubTitulo = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: "Ubuntu";
  color: rgba(223, 223, 223, 1);
  padding: 20px 20px;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: 426px) {
    font-size: 16px;
    text-align: justify;
  }
`;
