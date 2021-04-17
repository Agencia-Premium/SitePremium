import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.45);
  backdrop-filter: blur(13px);
  position: absolute;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 40px;
  }

  a {
    font-size: 28px;
    color: #f7f7f7;
    font-weight: bold;
    font-family: "Inter";
    padding-bottom: 40px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
      color: ${darken(0.12, "#F7F7F7")};
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;
