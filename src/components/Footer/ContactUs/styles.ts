import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 60px 0 0 0;
  position: relative;
  display: flex;

  div.contact {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.container-footer {
    height: 710px;
    background-image: url("footerr.png");
    background-size: 100% auto;
    background-position: center bottom;
    background-repeat: no-repeat;
    min-width: 100%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
  }

  div.content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-left: 250px;
  }

  div.content img {
    width: 182px;
    height: 104px;
  }

  div.content-menu {
    margin-left: 100px;

    h6 {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      font-family: "Inter";
      padding-bottom: 12px;
    }

    p {
      font-size: 16px;
      color: #fff;
      font-weight: 400;
      font-family: "Inter";
      padding-bottom: 10px;
      cursor: pointer;
    }
  }

  div.second-menu {
    margin-left: 48px;

    p {
      font-size: 16px;
      color: #fff;
      font-weight: 400;
      font-family: "Inter";
      padding-bottom: 10px;
      cursor: pointer;
    }
  }

  svg {
    position: absolute;
    top: -20px;
    left: 25%;
  }

  div.three-menu {
    margin-left: 162px;

    h6 {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      font-family: "Inter";
      padding-bottom: 12px;
    }
  }
  div.box-menu {
    display: flex;
    padding-top: 200px;
  }
`;


