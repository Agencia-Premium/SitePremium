import React from "react";
import Image from "next/image";

import { I_ProjectType } from "../../pages/ourproject";

import { ContainerGallery } from "./styles";

interface ComponentProps extends I_ProjectType {}

const ImageProject: React.FC<ComponentProps> = ({
  id,
  title,
  short_description,
  description,
  image,
}) => {
  return (
    <>
      <ContainerGallery>
        <div className="quadro">
          <div className="imagem">
            <img src={`http://localhost:1337${image.url}`} alt={image.name} />
          </div>
          <div className="blur" />
          <h2>{title}</h2>
          <p>{short_description}</p>
          <img className="arrow" src="arrow.svg" alt="seta" />
        </div>
      </ContainerGallery>
    </>
  );
};
export default ImageProject;
