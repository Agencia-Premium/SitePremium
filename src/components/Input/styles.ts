import styled, { css } from "styled-components";
import { InputProps } from "./index";

const WrapperModifiers = {
  gray: () => css`
    background: #333;
    color: #fff;
    border: none;

    ::placeholder {
      color: #fff;
    }
  `,
  transparent: () => css`
    background-color: transparent;
    color: #848484;
    border-top-width: 1px;
    
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: #eee;
    ::placeholder {
      color: #848484;
    }
  `,

  small: () => css`
    width: 286px;
    height: 42px;
  `,

  medium: () => css`
    width: 416px;
    height: 56px;
  `,
  large: () => css`
    width: 416px;
    height: 128px;
  `,
};

export const Wrapper = styled.input<InputProps>`
  ${({ scale, background, marginBottom }) => css`
    padding-left: 12px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    outline: none;
    ${!!background && WrapperModifiers[background]}
    ${!!scale && WrapperModifiers[scale]}
    margin-bottom: ${marginBottom ? "28px" : "0px"};
    border-bottom-width: ${marginBottom ? '1px' : '0px'};
  `}
`;
