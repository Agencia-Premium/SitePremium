import styled from "styled-components";

export const ContainerProject = styled.div`
  width: 940px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const Right = styled.div`
    width: 50%;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
    position: relative;    

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 700;
    text-align: left;
    padding-bottom: 24px;
    color: #dfdfdf;

    @media screen and (max-width: 768px){
      font-size: 2.4rem;
      text-align: center;
      padding-bottom: 0px;
    }
  }
  p {
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #ffffff;
    padding-bottom: 24px;

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
      text-align: center;
      line-height: 24px;
      padding-bottom: 2px;
    }
  }
`;

export const Left = styled.div`
    width: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;
    
  img {
    background: #333333;
    opacity: 0.4;
    border-radius: 8px;
    width: 416px;
    height: 430px;
  
    @media screen and (max-width: 768px) {
      width: 200px;
      height: 216px;
    }
  }
`;
