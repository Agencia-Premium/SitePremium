import React from "react";

import * as S from "./styles";

export type CardsCommentProps = {
  image: string;
  title: string;
  description: string;
  align?: string;
};

const ContainerComentario: React.FC<CardsCommentProps> = ({
  image,
  title,
  description,
  align,
}) => {
  return (
    <>
      <S.Wrapper>
        {align === "start" ? (
          <>
            <div className="column-one">
              <S.Card align={align}>
                <img className="left" src="AspasEsquerda.svg" alt="aspas na cor preta" />
                <img className="right" src="AspasDireita.svg" alt="aspas na cor preta" />
                <div className="container-left">
                  <img src={image} alt="logo da empresa riobeef" />
                </div>
                <div className="container-right">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </S.Card>
            </div>
          </>
        ) : (
          <>
            <div className="column-two">
              <S.Card align={align}>
                <img className="left" src="AspasEsquerda.svg" alt="aspas na cor preta" />
                <img className="right" src="AspasDireita.svg" alt="aspas na cor preta" />
                <div className="container-right">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="container-left">
                  <img src={image} alt="logo da empresa fórmula X" />
                </div>
              </S.Card>
            </div>
          </>
        )}
      </S.Wrapper>
    </>
  );
};
export default ContainerComentario;
