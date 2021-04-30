import React from "react";
import Link from "next/link";

import { baseURL } from "../../../config.json";

import { I_ProjectType } from "../../pages/ourproject";

import { ContainerGallery } from "./styles";

interface ComponentProps extends I_ProjectType {}

const ImageProject: React.FC<ComponentProps> = ({
  id,
  image,
  title,
  short_description,
  description,
  href,
}) => {
  return (
    <>
      <ContainerGallery>
        <div className="quadro">
          <div className="imagem">
            <img src={`${baseURL}${image.url}`} alt={image.name} />
          </div>
          <div className="blur" />
          <h2>{title}</h2>
          <p>{short_description}</p>
          <Link href={`projects/${href}`}>
            <button>
              <img className="arrow" src="/arrow.svg" alt="seta" />
            </button>
          </Link>
        </div>
      </ContainerGallery>
    </>
  );
};
export default ImageProject;
