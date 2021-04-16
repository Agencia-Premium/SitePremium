import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 60px;

  div.contact svg {
    z-index: 99;
  }

  div.container-footer {
    background-image: url("footerr.png");
    background-size: 100% auto;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: relative;
  }

  div.content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.content img {
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
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 400px;
    /* position: relative; */
  }

  div.diviser {
    width: 100%;
    padding-top: 40px;
  }

  div.diviser hr {
    max-width: 70%;
    background-color: white;
  }

  div.copyright {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    /* position: relative; */

    p {
      font-size: 16px;
      color: #fff;
      font-weight: 500;
      font-family: "Inter";
      padding-top: 22px;
    }

    .social-media {
      display: flex;
      padding-top: 22px;

      a img {
        width: 24px;
        height: 24px;
        margin-left: 3px;
      }
    }
  }

  div.circle-one {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: red;
    position: absolute;
    top: 120px;
    left: -50px;
    background: rgba(102, 102, 102, 0.2);
    backdrop-filter: blur(10px);
  }
`;
