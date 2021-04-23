import React from 'react';

import {TituloName, LineBotton, SubTitulo} from './styles';

type TitleProps = {
    name: string;
    description?: String;
    image?: string;
}

const Coments: React.FC<TitleProps> = ({ name, description, image }) => {
    return(
        <>
            <LineBotton>
                <TituloName>{name}</TituloName>
                {/* <img src={image} alt="imagem do comentário" /> */}
                {description && <SubTitulo>{description}</SubTitulo>}
            </LineBotton>
            
        </>
    )

}

export default Coments;