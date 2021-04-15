import styled, { css } from "styled-components";
import { ButtonProps } from "./index";
import { darken } from "polished";

type WrapperProps = Pick<ButtonProps, "scale" | "background">;

const WrapperModifiers = {
  small: () => css`
    width: 124px;
    height: 42px;
    font-size: 16px;
    font-weight: bold;
    font-family: "Inter";
  `,
  medium: () => css`
    width: 416px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    font-family: "Inter";
  `,
  gray: () => css`
    background-color: #333;
    color: #ccc;
    transition: all 0.2s ease-in-out;
    :hover {
      background: ${darken(0.02, "#333")};
    }
  `,
  yellow: () => css`
    background-color: #fdd028;
    color: #333;

    transition: all 0.2s ease-in-out;
    :hover {
      background: ${darken(0.1, "#fdd028")};
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ scale, background }) => css`
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    outline: none;
    ${!!scale && WrapperModifiers[scale]}
    ${!!background && WrapperModifiers[background]}

    img {
      width: 20px;
      height: 20px;
    }
  `}
`;
