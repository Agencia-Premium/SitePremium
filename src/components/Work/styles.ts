import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 60px 0;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Left = styled.div`
  width: 40%;
  height: 600px;
  background-image: url("./trofeu-works.webp");
  background-size: contain;
  background-position: left bottom;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1120px) {
    width: 100%;
    height: 100% auto;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 526px) {
    width: 303px;
    height: 406px;
  }

  h1 {
    font-size: 100px;
    font-weight: 700;
    font-family: "Ubuntu";
    color: rgba(241, 241, 241, 1);
    text-align: left;

    @media screen and (max-width: 526px) {
      font-size: 60px;
      line-height: 66px;
    }

    img {
      width: 70px;
      height: 82px;
      margin-right: 10px;

      @media screen and (max-width: 526px) {
        width: 50px;
        height: 62px;
      }
    }
  }

  h2 {
    font-size: 74px;
    font-weight: 700;
    font-family: "Ubuntu";
    color: rgba(241, 241, 241, 1);
    text-align: right;

    @media screen and (max-width: 526px) {
      font-size: 48px;
      line-height: 48px;
    }
  }

  .informations {
    display: flex;
    justify-content: space-between;
    margin-top: 44px;

    p {
      font-size: 32px;
      font-weight: 400;
      font-family: "Ubuntu";
      color: #b4b4b4;
      line-height: 36px;

      @media screen and (max-width: 526px) {
        font-size: 26px;
        text-align: center;
      }
    }

    img {
      margin-left: 20px;

      @media screen and (max-width: 526px) {
        display: none;
      }
    }
  }
`;

export const Right = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;

  @media screen and (max-width: 1120px) {
    min-width: 100%;
  }
  /* overflow-x: hidden; */
  /* overflow: hidden; */
`;
