import styled from "styled-components";

export const PostCardStyles = styled.div`
  width: 100%;
  max-width: 328px;
  height: 100%;
  transition: 1s all ease-in-out;
  position: relative;

  .container-overflow {
    width: 100%;
    height: 100%;
    top: 0;
    display: none;
    position: absolute;
    z-index: 999;
    backdrop-filter: blur(6px);
    border-radius: 4px;
    transition: 1s all ease-in-out;
  }

  :hover {
    transition: 1s all ease-in-out;

    > div.container-overflow {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 1s all ease-in-out;
      justify-content: center;
    }

    .button-overflow {
      display: flex;
      opacity: 1;
      width: 200px;
      height: 50px;
      border-radius: 8px;
      border: 1px solid #f7f7f7;
      background: transparent;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #f7f7f7;
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  .middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;

    span {
      font-size: 1.8rem;
      font-weight: bold;
      color: #f8af30;
      font-family: "Ubuntu", sans-serif;
    }

    span.tag {
      background: #f8af30;
      border-radius: 4px;
      color: #222222;
      padding: 4px;
      font-size: 1.4rem;
      font-family: "Ubuntu", sans-serif;
    }
  }

  main {
    p {
      font-size: 2.7rem;
      line-height: 3.2rem;
      color: #f7f7f7;
      font-family: "Ubuntu", sans-serif;
      font-weight: normal;
    }

    span {
      margin-top: 12px;
      color: #ababab;
      font-size: 1.6rem;
      line-height: 2rem;
      font-family: "Ubuntu", sans-serif;
    }
  }
`;
