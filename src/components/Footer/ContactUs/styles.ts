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
    display: flex;
    background-image: url("footer.svg");
    background-size: 100% auto;
    background-position: center bottom;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    align-items: center;
  }

  div.logo img {
    width: 182px;
    height: 104px;

    margin-top: 300px;
  }

  svg {
    position: absolute;
    top: -20px;
    left: 25%;
  }
`;
