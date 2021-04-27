import styled, { keyframes } from "styled-components";

const appearFromAviao = keyframes`
    0% {
        bottom: 0;
        left: 0;

    }
    100% {
        bottom: 70%;
        left: 70%;
        display: none;
    }
`;

const appearFromCongratulations = keyframes`
    0% {
        top: 30%;
    }
    80% {
        top: 35%;
    }
    100% {
      top: 30%;
    }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background: linear-gradient(111.34deg, #545454 0%, #0b0b0b 100%);
    position: relative;

  .conteinerForme {
    margin-top: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    input {
      font-family: "Ubuntu";
    }

   
    .container-error {
      height: 40px;
      display: flex;
      border-radius: 12px;
      padding: 0 20px;
      align-items: center;
      justify-content: center;
      background-color: #DC143C;

      margin-bottom: 40px;

      span {
        font-size: 16px;
        color: #fefe;
        font-family: "Ubuntu";
        font-weight: 700;
      }
    }
  }

  main {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperIcon = styled.div`
  max-width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: 700;
    color: #fefe;
    font-family: "Ubuntu";
  }

  .success {
    padding-top: 200px;
  }

  .aviao {
    position: absolute;
    animation: ${appearFromAviao} 3s infinite;
  }

  .congratulations {
    position: absolute;
    animation: ${appearFromCongratulations} 2s infinite;
  }
`;
