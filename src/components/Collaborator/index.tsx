import React from "react";

import * as S from "./styles";

export type CollaboratorProps = {
  image: string;
  name: string;
  occupation: string;
  description: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
};

const Collaborator: React.FC<CollaboratorProps> = ({
  image,
  name,
  occupation,
  description,
  facebook,
  instagram,
  linkedin,
  twitter
}) => {
  return (
    <>
      <S.Wrapper>
        <div className="container-image">
            <img src={image} alt="foto dos colaboradores" />
        </div>
        <h1>{name}</h1>
        <h5>{occupation}</h5>
        <p>
          {description}
        </p>
        <div className="social-media">
          <div className="icon">
            <a href={facebook} target="_blank">
              <img src="facebook.svg" alt="icone do facebook" />
            </a>
          </div>

          <div className="icon">
            <a href={instagram} target="_blank">
              <img src="instagram.svg" alt="icone do instagram" />
            </a>
          </div>

          <div className="icon">
            <a href={linkedin} target="_blank">
              <img src="linkedin.svg" alt="icone do linkedin" />
            </a>
          </div>

          <div className="icon">
            <a href={twitter} target="_blank">
              <img src="twitter.svg" alt="icone do twitter" />
            </a>
          </div>
        </div>
      </S.Wrapper>
    </>
  );
};

export default Collaborator;
