import styled from "styled-components";

export const Wrapper = styled.div`
  width: 328px;
  height: 345px;
  background: rgba(11, 11, 11, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 56px 20px 20px 0;

  .container-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #888888;

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
    }
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    font-family: "Inter";
    color: #dfdfdf;

    padding-top: 16px;
  }

  h5 {
    font-size: 16px;
    font-weight: 500;
    font-family: "Inter";
    color: #dfdfdf;

    padding-top: 12px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    font-family: "Inter";
    color: #a1a1a1;
    padding: 10px 28px;
    line-height: 26px;
    text-align: justify;
  }

  .social-media {
    display: flex;
    margin-top: 16px;

    .icon {
      margin: 0 10px;
      transition: all 0.5s ease;

      img {
        :hover {
          transform: scale(1.5);
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
      }
    }
  }
`;
