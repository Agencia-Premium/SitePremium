import React from 'react';

import {ContainerImg} from './styles';

type TitleProps = {
    imagem?: string;
}

const ImagemCenter: React.FC<TitleProps> = ({imagem}) => {
    return(
        <>  
            <ContainerImg>
                <img src={imagem}/>
            </ContainerImg>

        </>
    )

}
export default ImagemCenter;