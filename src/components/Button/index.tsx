import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  scale?: "small"| 'xsmall' | "medium" | "xmedium";
  background?: "gray" | "yellow";
  icon?: string;
} & ButtonAttributes;

const Button: React.FC<ButtonProps> = ({
  scale = "medium",
  background = "gray",
  children,
  icon,
  ...props
}) => {
  return (
    <>
      <S.Wrapper
        scale={scale}
        background={background}
        {...props}
      >
        {children}
        {!!icon && <img src={icon} style={{ width: '20px', height: '20px', marginLeft: '4px' }} alt="ícone do botão" />}
      </S.Wrapper>
    </>
  );
};

export default Button;
