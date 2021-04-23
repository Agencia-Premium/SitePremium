import styled from "styled-components";

export const ContainerProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width:100%;
    height:100%; */
  margin: 0 auto;

  .Container {
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

export const Galery = styled.div`
    
  .Gallery {
      width: 100%;
      height:100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      margin: 0 auto;

      .squad {
      /* width: 100%;
      height:100%; */
      display: flex;
      align-items: center;
      flex-direction: row;
  }
  }
  
`;
