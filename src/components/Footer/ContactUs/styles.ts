import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1160px) {
    display: none;
  }

  div.contato {
    width: 700px;
    height: 380px;
    background-image: url("/cardNoAll4x.webp");
    display: flex;
    /* flex-direction: column; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    z-index: 99;
    position: absolute;
    top: -60px;
    align-items: center;
    justify-content: center;

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .left h1 {
      padding-left: 40px;
      font-size: 28px;
      font-weight: 700;
      color: #333;
      font-family: "Ubuntu";
    }

    .left p {
      padding: 40px 0px 0 40px;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      color: #333;
      font-family: "Ubuntu";
    }

    .right {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max-width: 768px) {
      width: 600px;
      height: 320px;

      .left h1 {
        font-size: 20px;
        padding-left: 10px;
      }

      .left p {
        padding-top: 20px;
        font-size: 12px;
      }
    }
  }

  div.container-footer {
    width: 100%;
    height: 100%;
    background-image: url("/footerr.png");
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

    h1 {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      font-family: "Ubuntu";
      padding-bottom: 12px;
    }

    p {
      font-size: 16px;
      color: #fff;
      font-weight: 400;
      font-family: "Ubuntu";
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
      font-family: "Ubuntu";
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

    h1 {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      font-family: "Ubuntu";
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
      font-family: "Ubuntu";
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

export const FooterMobile = styled.footer`
  display: none;
  margin-top: 200px;
  height: 300px;

  @media screen and (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 100% auto;
    align-items: center;

    p {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      font-family: "Ubuntu";
      padding-bottom: 20px;
    }

    div.box-footer {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      
    }

    div.content {
      position: absolute;
      bottom: 60px;
      width: 60%;
      background: linear-gradient(
        105.57deg,
        #e9e9e9 0%,
        #cccccc 33.28%,
        #a8a8a8 100%
      );
      padding-bottom: 40px;
      z-index: 999;
      clip-path: polygon(0 0, 100% 9%, 100% 92%, 0% 100%);
      border-radius: 8px;

      @media screen and (max-width: 768px) {
        width: 90%;
        bottom: 80px;
      }
    }

    .left-content {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
    }

    .left-content h3 {
      padding-top: 60px;
      font-size: 28px;
      font-weight: 700;
      color: #333;
      font-family: "Ubuntu";
      padding-left: 40px;

      @media screen and (max-width: 768px) {
        padding-top: 30px;
        font-size: 22px;
      }

      @media screen and (max-width: 526px) {
        font-size: 18px;
        padding-left: 20px;
      }
    }

    .left-content p {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      color: #333;
      font-family: "Ubuntu";
      padding: 40px 40px 0 40px;
      text-align: justify;

      @media screen and (max-width: 768px) {
        font-size: 14px;
        padding-top: 20px;
      }

      @media screen and (max-width: 526px) {
        font-size: 12px;
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    .right-content {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 100px;
    }
  }

  @media screen and (max-width: 426px) {
    p {
      font-size: 12px;
    }
  }
`;
