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
            </ContainerComent>
        </>


    )




}
export default ContainerComentario;