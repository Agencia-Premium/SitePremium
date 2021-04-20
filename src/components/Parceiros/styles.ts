import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 40px auto;

  > img {
    margin-right: 20px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
      flex-direction: column;

      > img {
          margin-bottom: 20px;
      }
  }
`;
