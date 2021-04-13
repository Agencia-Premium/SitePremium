import React from 'react';

import {ContainerComent, Grade, Left, Right} from './style';

const ContainerComentario: React.FC = ({}) => {
    return(
        <>
            <ContainerComent>
                <Grade>
                    <img className="AspasEsquerda" src="AspasEsquerda.svg"/>
                    <Left>
                        <img src="RioBeefComent.webp"/>
                    </Left> 
                    <Right>
                        <h2>Rio Beef</h2>
                        <p> Oferecer seu produto ou serviço para a pessoa certa faz total diferença, nosso time é expecialista nisso!</p>
                    </Right>
                   <img className="AspasDireita"src="AspasDireita.svg"/>
                </Grade>

                <Grade className="comente2"> 
                    <img className="AspasEsquerda" src="AspasEsquerda.svg"/>
                    <Right >
                        <h2 className="depo">Fórmula X</h2>
                        <p className="depo"> Oferecer seu produto ou serviço para a pessoa certa faz total diferença, nosso time é expecialista nisso!</p>
                    </Right>
                    <Left>
                        <img src="formulax.webp"/>
                    </Left>
                    <img className="AspasDireita"src="AspasDireita.svg"/>
                </Grade>
            </ContainerComent>

        </>


    )




}
export default ContainerComentario;