import React from "react";
import * as S from "./styles";

export type InputProps = {
  background?: "gray" | "transparent";
  scale?: "medium" | "large";
};

const Input: React.FC<InputProps> = ({
  background = 'gray',
  scale = 'medium',
}) => {
  return (
    <>
      <S.Wrapper background={background} scale={scale}></S.Wrapper>
    </>
  );
};

export default Input;
