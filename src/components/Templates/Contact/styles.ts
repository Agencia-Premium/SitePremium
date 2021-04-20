import styled, { keyframes } from "styled-components";

const appearFromAviao = keyframes`
    0% {
        bottom: 0;
        left: 0;

    }
    100% {
        bottom: 85%;
        left: 85%;
        display: none;
    }
`;

const appearFromCongratulations = keyframes`
    0% {
        bottom: 20%;
    }
    100% {
        bottom: 25%;
    }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  background: linear-gradient(111.34deg, #545454 0%, #0b0b0b 100%);
  position: relative;

  .conteinerForme {
    margin-top: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const WrapperIcon = styled.div`
  max-width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  span {
    font-size: 24px;
    font-weight: 700;
    color: #fefe;
    font-family: "Inter";
  }

  .aviao {
    position: absolute;
    animation: ${appearFromAviao} 4s infinite;
  }

  .congratulations {
    position: absolute;
    animation: ${appearFromCongratulations} 2s infinite;
  }
`;
