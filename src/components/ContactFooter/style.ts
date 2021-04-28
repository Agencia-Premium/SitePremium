import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes `
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(-0px)
  }
`

export const ContainerContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  font-family: "Ubuntu";
  color: rgba(223, 223, 223, 1);
  position: relative;


  /* padding-top: 90px; */
  /* padding-bottom: 40px; */
 

  @media screen and (max-width: 768px) {
    display: none;
  }

  .container-footer {
    position: absolute;
    bottom: 40px;
    display: flex;
    animation: ${appearFromBottom} 2s;

  }
   .container-footer a {
       color: rgba(223, 223, 223, 1);
      text-decoration: none;
    }

  .circlo {
    position: absolute;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  img {
    display: inline-block;
  }

  div {
    margin-right: 24px;
    margin-left: 80px;
  }
`;
