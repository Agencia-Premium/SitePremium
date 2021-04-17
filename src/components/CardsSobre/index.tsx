import React from "react";

import { ContainerSobre, GradeLeft, Left, Right } from "./style";

type CardsSobreProps = { // definindo as propriedades dinâmicamente
  image: string;
  title: string;
  subtitle: string;
  alt?: string;
};

const CardsSobre: React.FC<CardsSobreProps> = ({
  image,
  subtitle,
  title,
  alt,
}) => {
  return (
    <>
      <ContainerSobre>
        <GradeLeft>
          <Left>
            <img src={image} alt={alt} />
          </Left>
          <Right>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </Right>
        </GradeLeft>
      </ContainerSobre>
    </>
  );
};
export default CardsSobre;
