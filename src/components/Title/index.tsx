import React from 'react';

import {NameTitulo, LineBotton, SubTitulo} from './styles';

type TitleProps = {
    name: string
    description?: String
}

const Title: React.FC<TitleProps> = ({ name, description }) => {
    return(
        <>
            <LineBotton>
                <NameTitulo>{name}</NameTitulo>
                <img src="line_botton.svg"/>
                {description && <SubTitulo>{description}</SubTitulo>}
            </LineBotton>
            
        </>
    )

}

export default Title;