import React from "react";

import { ContainerProject } from "./styles";

type ExtendedProps = {
  imagem?: string;
  titulo?: string;
  subTitulo?: string;
};
const ExtendedProject: React.FC<ExtendedProps> = ({
  imagem,
  titulo,
  subTitulo,
}) => {
  return (
    <>
      <ContainerProject>
        <div className="containerMain">
          <div className="Right">
            <img src={imagem} alt="" />
          </div>
          <div className="Left">
            <h2>{titulo}</h2>
            <p>{subTitulo}</p>
          </div>
        </div>
      </ContainerProject>
    </>
  );
};
export default ExtendedProject;
