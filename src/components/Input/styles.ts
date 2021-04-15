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
    border: 1px solid #eeee;
    
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
    /* border-top-width: ${marginBottom ? '1px': '0'}: */
    margin-bottom: ${marginBottom ? "28px" : "0px"}
  `}
`;
