import React from "react";
import * as S from "./styles";

export type CardWorkProps = {
  image: string;
  title: string;
  description: string;
};

const CardWork = ({ image, title, description }: CardWorkProps) => {
  return (
    <>
      <S.Wrapper image={image}>
        <h1>{title}</h1>
        <p>{description}</p>
      </S.Wrapper>
    </>
  );
};

export default CardWork;
