import React from 'react';

import {ContainerComent, Grade, Left, Right} from './style';

const ContainerComentario: React.FC = ({}) => {
    return(
        <>
            <ContainerComent>
                <Grade>
                    <Left>
                        <img src="RioBeefComent.webp"/>
                    </Left> 
                    <Right>
                        <h2>Rio Beef</h2>
                        <p> Oferecer seu produto ou serviço para a pessoa certa faz total diferença, nosso time é expecialista nisso!</p>
                    </Right>
                   
                </Grade>

                <Grade className="comente2"> 
                    <Right >
                        <h2 className="depo">Fórmula X</h2>
                        <p className="depo"> Oferecer seu produto ou serviço para a pessoa certa faz total diferença, nosso time é expecialista nisso!</p>
                    </Right>
                    <Left>
                        <img src="formulax.webp"/>
                    </Left>
                </Grade>
            </ContainerComent>

        </>


    )




}
export default ContainerComentario;