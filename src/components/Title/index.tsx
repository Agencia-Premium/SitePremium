import React from 'react';

import {NameTitulo, LineBotton, SubTitulo} from './styles';

type TitleProps = {
    name: string;
    description?: String;
    image?: string;
}

const Title: React.FC<TitleProps> = ({ name, description, image }) => {
    return(
        <>
            <LineBotton>
                <NameTitulo>{name}</NameTitulo>
                <img src={image} alt="linha na cor amarela embaixo do texto" />
                {description && <SubTitulo>{description}</SubTitulo>}
            </LineBotton>
            
        </>
    )

}

export default Title;