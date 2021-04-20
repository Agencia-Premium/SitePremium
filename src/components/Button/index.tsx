import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  scale?: "small" | "medium" | "xmedium";
  background?: "gray" | "yellow";
  icon?: string;
};

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
        {!!icon && <img src={icon} style={{ width: '20px', height: '20px', marginLeft: '4px' }} />}
      </S.Wrapper>
    </>
  );
};

export default Button;
