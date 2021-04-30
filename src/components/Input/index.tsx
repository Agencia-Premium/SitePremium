import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputAttributesProps = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  background?: "gray" | "transparent";
  scale?: "small" | "medium" | "large";
  marginBottom?: boolean;
  placeholder?: string;
  borderColor?: boolean;
  mask?: string;
} & InputAttributesProps;

const Input: React.FC<InputProps> = ({
  background = "gray",
  scale = "medium",
  marginBottom = true,
  placeholder,
  borderColor = false,
  mask,
  ...props
}) => {
  return (
    <>
      <S.Wrapper
        placeholder={placeholder}
        background={background}
        scale={scale}
        marginBottom={marginBottom}
        borderColor = {borderColor}
        mask={mask}
        {...props}
      ></S.Wrapper>
    </>
  );
};

export default Input;
