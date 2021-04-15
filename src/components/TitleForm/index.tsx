import React from 'react';

import {ContainerTitle, NameTitulo, SubTitulo} from './styles';

type TitleProps = {
    name: string;
    description?: string;
}

const TitleForm: React.FC<TitleProps> = ({name, description}) => {
    return(
        <>
            <ContainerTitle>
                <NameTitulo>{name}</NameTitulo>
                {description && <SubTitulo>{description}</SubTitulo>}
            </ContainerTitle>
        </>
        )
}

export default TitleForm;
