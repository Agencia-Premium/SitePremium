import React from "react";
import * as S from "./styles";

export type InputProps = {
  background?: "gray" | "transparent";
  scale?: "small" | "medium" | "large";
  marginBottom?: boolean;

};

const Input: React.FC<InputProps> = ({
  background = "gray",
  scale = "medium",
  marginBottom = false,
}) => {
  return (
    <>
      <S.Wrapper
        background={background}
        scale={scale}
        marginBottom={marginBottom}
      ></S.Wrapper>
    </>
  );
};

export default Input;
