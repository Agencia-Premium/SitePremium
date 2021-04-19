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
                <img className="left" src="AspasEsquerda.svg" />
                <img className="right" src="AspasDireita.svg" />
                <div className="container-left">
                  <img src={image} />
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
                <img className="left" src="AspasEsquerda.svg" />
                <img className="right" src="AspasDireita.svg" />
                <div className="container-right">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="container-left">
                  <img src={image} />
                </div>
              </S.Card>
            </div>
          </>
        )}
      </S.Wrapper>

      {/* <ContainerComent>
        <div className="grade-left">
          <Grade>
            <img className="AspasEsquerda" src="AspasEsquerda.svg" />
            <Left>
              <img src="RioBeefComent.webp" />
            </Left>
            <Right>
              <h2>Rio Beef</h2>
              <p>
                {" "}
                Oferecer seu produto ou serviço para a pessoa certa faz total
                diferença, nosso time é expecialista nisso!
              </p>
            </Right>
            <img className="AspasDireita" src="AspasDireita.svg" />
          </Grade>
        </div>

        <div className="grade-right">
          <Grade className="comente2">
            <img className="AspasEsquerda" src="AspasEsquerda.svg" />
            <Right>
              <h2 className="depo">Fórmula X</h2>
              <p className="depo">
                {" "}
                Oferecer seu produto ou serviço para a pessoa certa faz total
                diferença, nosso time é expecialista nisso!
              </p>
            </Right>
            <Left>
              <img src="formulax.webp" />
            </Left>
            <img className="AspasDireita" src="AspasDireita.svg" />
          </Grade>
        </div>
      </ContainerComent> */}
    </>
  );
};
export default ContainerComentario;
