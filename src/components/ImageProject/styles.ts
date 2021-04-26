import styled from "styled-components";

export const ContainerGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #ffffff;

  .quadro {
    width: 329px;
    height: 386px;
    position: relative;
    box-sizing: border-box;
    margin: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imagem {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 8px;
    }
  }

  h2 {
    position: absolute;
    top: 272px;
    left: 19px;
    font-size: 3.2rem;
    font-weight: 700;
    font-family: "Inter";
  }

  p {
    position: absolute;
    top: 309px;
    left: 20px;
    width: 210px;
    height: 63px;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Inter";
    text-align: justify;
    overflow: hidden;
  }

  .blur {
    width: 328px;
    height: 202px;
    position: absolute;
    bottom: -2px;
    border: none;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    clip-path: polygon(0% 100%, 100% 100%, 100% 39%, -12% 0%);
  }

  button {
    position: absolute;
    top: 325px;
    left: 261px;
    cursor: pointer;
    background: transparent;
    border: 0;

  }

  .arrow {
  }
`;
