import styled, { css } from "styled-components";
import { InputProps } from "./index";

const WrapperModifiers = {
  gray: () => css`
    background-color: #333;
    color: #fff;
    border: none;

    ::placeholder {
      color: #fff;
    }
  `,
  transparent: () => css`
    background-color: transparent;
    color: #848484;
    border: 2px solid #EEEE;

    ::placeholder {
      color: #848484;
    }
  `,

  medium: () => css`
    width: 286px;
    height: 42px;
  `,
  large: () => css`
    width: 416px;
    height: 56px;
  `,
};

export const Wrapper = styled.input<InputProps>`
  ${({ scale, background }) => css`
    padding-left: 12px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    outline: none;
    ${!!background && WrapperModifiers[background]}
    ${!!scale && WrapperModifiers[scale]}
  `}
`;
