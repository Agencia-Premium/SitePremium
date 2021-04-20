import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputAttributesProps = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  background?: "gray" | "transparent";
  scale?: "small" | "medium" | "large";
  marginBottom?: boolean;
  placeholder?: string;
} & InputAttributesProps;

const Input: React.FC<InputProps> = ({
  background = "gray",
  scale = "medium",
  marginBottom = true,
  placeholder,
  ...props
}) => {
  return (
    <>
      <S.Wrapper
        placeholder={placeholder}
        background={background}
        scale={scale}
        marginBottom={marginBottom}
        {...props}
      ></S.Wrapper>
    </>
  );
};

export default Input;
