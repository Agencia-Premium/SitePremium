import styled from "styled-components";

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: 50px 0 10px 0;

  @media screen and (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
    /* width: 100%;
      margin: 0 auto;  dados originais*/
    width: 95%;
    margin: 0 auto;
    padding-left: 15px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
  }
`;
export const Cards = styled.div`
  width: 328px;
  height: 214px;
  border-radius: 6px;
  background: rgba(11, 11, 11, 0.5);
  margin: 8px;
  text-align: left;

  @media screen and (max-width: 426px) {
    width: initial;
    height: 180px;
  }

  :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: rgba(223, 223, 223, 1);
    font-family: "Ubuntu";
    padding: 16px 0;
    text-align: center;

    @media screen and (max-width: 426px) {
      font-size: 2.6rem;
      padding: 16px 0;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    color: rgba(161, 161, 161, 1);
    font-family: "Ubuntu";
    line-height: 22px;
    padding: 2px 20px;
    text-align: center;
    text-align: justify;

    @media screen and (max-width: 426px) {
      font-size: 1.6rem;
    }
  }
`;
