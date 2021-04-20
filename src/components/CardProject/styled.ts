import styled from "styled-components";

export const ContainerProject = styled.div`
  width: 940px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Right = styled.div`
    width: 50%;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
    position: relative;    

  h2 {
    font-size: 3.2rem;
    font-weight: 700;
    text-align: left;
    padding-bottom: 22px;
    color: #dfdfdf;
  }
  p {
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #ffffff;
    padding-bottom: 24px;
  }
  #ver {
      position: relative;
      width: 243px;
      height: 57px;
      background: #fdd028;
      border-radius: 8px;
      box-sizing: border-box;
      border: none;
      outline: none;
      font-size: 2.6rem;
      font-weight: 700;
      text-align: center;
      cursor: pointer;
      

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
  }
`;
