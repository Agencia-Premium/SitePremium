import React from 'react';

import { ContainerGallery } from './styles';

type ProjectProps = {
    imagem?: string;
    titulo?: string;
    subTitulo?: string;
    arrow?: string;
}

const ImageProject: React.FC<ProjectProps> = ({imagem, titulo, subTitulo, arrow }) => {
    return(
        <>
            <ContainerGallery>
                <div className="quadro">
                    <div className="imagem">
                        <img src={imagem} alt="" />
                    </div>
                    <div className="blur" />
                    <h2>{titulo}</h2>
                    <p>{subTitulo}</p>
                    <img className="arrow"src={arrow} alt="seta" />
                </div>
                
            </ContainerGallery>
        </>
    )
}
export default ImageProject;