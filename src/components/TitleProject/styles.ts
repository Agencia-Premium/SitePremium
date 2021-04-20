import styled from "styled-components";

export const ContainerOur = styled.div`
  width: 940px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter";
  font-weight: 700;
  color: #dfdfdf;
  position: relative;
  padding: 30px 0 50px 0;
  
`;
export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 120%;
  }
`;
export const Right = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -2%;

  h2 {
    font-size: 4.6rem;
  }

  h1 {
    font-size: 8.4rem;
  }

  img {
    width: 331px;
  }
`;
