import styled, { css } from "styled-components";
import { InputProps } from "./index";

type BorderProps = Pick<InputProps, 'borderColor'>

const WrapperModifiers = {
  gray: () => css`
    background: #333;
    color: #ccc;
    border: none;

    ::placeholder {
      color: #ccc;
    }
  `,
  transparent: ({borderColor}: BorderProps) => css`
    background-color: transparent;
    color: #848484;
    border-top-width: 1px;
    
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: ${borderColor ? '#DC143C' : '#eee'};
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

    @media screen and (max-width: 426px) {
      width: 300px;
      height: 50px;
    }
  `,
  large: () => css`
    width: 416px;
    height: 128px;

    @media screen and (max-width: 426px) {
      width: 300px;
      height: 100px;
    }
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
