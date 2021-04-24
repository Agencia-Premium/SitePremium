import styled from "styled-components";

export const ContainerProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width:100%;
    height:100%; */
  margin: 0 auto;

  .ContainerProj {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    h2 {
      font-size: 4.6rem;
      font-weight: 700;
      font-family: "Inter";
      line-height: 6rem;
      color: #dfdfdf;
    }

    p {
      justify-content: center;
      font-size: 2.2rem;
      font-weight: 400;
      font-family: "Inter";
      text-align: justify;
      line-height: 2.4rem;
      color: #cccccc;
      margin: 15px 24px 0 0;
    }
    .Right {
      width: 504px;
      /* height: 336px; */
      display: flex;
      flex-direction: column;

      /* align-items: center; */
      /* justify-content: center; */
    }

    .Left {
      display: flex;
      align-items: center;
      position: relative;
      top: 21px;

      .imagem {
        /* width:40%; */
        width: 504px;
        height: 351px;
      }
    }
  }
`;

export const Gallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    display: inline-block;
    font-size: 3.2rem;
    padding: 6rem 0 5rem 0;
    font-family: "Inter";
    font-weight: 700;
    color: #dfdfdf;
  }

  .gallery {
    width: 1032px;
    height: 329px;
    gap: 24px;

    img {
      border-radius: 8px;
      width: 328px;
      height: 329px;
    }
  }

  h3 {
    font-size: 3.2rem;
    padding: 6rem 0 3.2rem 0;
    text-align: center;
    font-family: "Inter";
    font-weight: 700;
    color: #dfdfdf;
  }
`;
export const Ourprj = styled.div`
  width: 1033px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  overflow: hidden;
  padding: 0 auto;
`