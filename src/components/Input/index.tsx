import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputAttributesProps = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  background?: "gray" | "transparent";
  scale?: "small" | "medium" | "large";
  marginBottomInput?: boolean;
  placeholder?: string;
  borderColorInput?: boolean;
  mask?: string;
} & InputAttributesProps;

const Input: React.FC<InputProps> = ({
  background = "gray",
  scale = "medium",
  marginBottomInput = true,
  placeholder,
  borderColorInput = false,
  mask,
  ...props
}) => {
  return (
    <>
      <S.Wrapper
        placeholder={placeholder}
        background={background}
        scale={scale}
        marginBottom={marginBottomInput}
        borderColor={borderColorInput}
        mask={mask}
        {...props}
      ></S.Wrapper>
    </>
  );
};

export default Input;
