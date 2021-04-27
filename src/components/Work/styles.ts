import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
  height: 600px;
  background-image: url("./trofeu-works.webp");
  background-size: contain;
  background-position: left bottom;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 100px;
    font-weight: 700;
    font-family: "Ubuntu";
    color: rgba(241, 241, 241, 1);
    text-align: left;

    img {
      width: 70px;
      height: 82px;
      margin-right: 10px;
    }
  }

  h2 {
    font-size: 74px;
    font-weight: 700;
    font-family: "Ubuntu";
    color: rgba(241, 241, 241, 1);
    text-align: right;
  }

  .informations {
    display: flex;
    justify-content: space-between;
    margin-top: 44px;

    p {
        font-size: 32px;
        font-weight: 400;
        font-family: "Ubuntu";
        color: #B4B4B4;
        line-height: 36px;
    }
  
    img {
        margin-left: 20px;
    }
  }
  
`;

export const Right = styled.div`
    width: 50%;
`;
