import styled from "styled-components";

export const TituloName = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  font-family: "Inter";
  text-align: center;
  color: rgba(223, 223, 223, 1);
  margin: 82px 0 0;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
export const LineBotton = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;
export const SubTitulo = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  text-align: justify;
  font-family: "Inter";
  color: rgba(223, 223, 223, 1);
  margin: 35px 0 0;
  /* width: 1032px; */
  /* height: auto; */
  line-height: 24px;

  @media screen and (max-width: 768px) {
      padding: 0 40px;
  }
`;