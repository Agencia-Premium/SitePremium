import styled from "styled-components";

export const Wrapper = styled.section`
  .CardsSobre {
    display: flex;
    width: 1064px;
    margin: auto;

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      margin-top: 40px;
    }
  }

  .history {
    width: 1064px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      flex-direction: column;
      justify-content: center;
      margin-top: 40px;
    }
  }

  footer {
    margin-top: 300px;

    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
  }
`;
