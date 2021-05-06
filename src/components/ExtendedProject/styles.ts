import styled from "styled-components";

export const ContainerProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 92px;

  @media screen and (max-width: 526px) {
    margin-top: 40px;
  }

  .ContainerProj {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family:"Ubuntu";

    @media screen and (max-width: 1120px) {
      flex-direction: column;
    }

    h1 {
      font-size: 4.6rem;
      font-weight: 700;
      font-family: "Ubuntu";
      line-height: 6rem;
      color: #dfdfdf;
      padding-bottom: 14px;

      @media screen and (max-width: 1120px) {
        text-align: center;
        font-size: 3rem;
      }
    }

    p {
      justify-content: center;
      font-size: 2.2rem;
      font-weight: 400;
      font-family: "Ubuntu";
      text-align: justify;
      line-height: 2.4rem;
      color: #cccccc;

      @media screen and (max-width: 1120px) {
        font-size: 1.6rem;
      }
    }

    .Right {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding-right: 24px;

      @media screen and (max-width: 1120px) {
        padding: 0;
      }

      img {
        border-radius: 8px;
      }
    }

    .Left {
      display: flex;
      align-items: center;
      height: 100%;

      @media screen and (max-width: 1120px) {
        justify-content: center;
        margin-top: 40px;
      }

      .imagem {
        border-radius: 8px;
        min-width: 300px;
        min-height: 150px;
      }
    }
  }
`;

export const Gallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3.2rem;
    padding: 10rem 0 5rem 0;
    font-family: "Ubuntu";
    font-weight: 700;
    color: #dfdfdf;
    text-align: center;
  }

  .gallery-project {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    @media screen and (max-width: 1120px) {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      margin: 0 auto;

    }

    img {
      border-radius: 8px;
      max-height: 330px;
      
      @media screen and (max-width: 1120px) {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const Ourprj = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 40px;
  gap: 24px;

  @media screen and (max-width: 1120px) {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      margin: 0px auto 80px;

    }
`;
