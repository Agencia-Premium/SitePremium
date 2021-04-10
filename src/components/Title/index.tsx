import React from 'react';

import {NameTitulo, LineBotton} from './styles';
    
const Title: React.FC = ({}) => {
    return(
        <>
            
            <LineBotton>
                <NameTitulo>Nossos Serviços</NameTitulo>
                <img src="line_botton.svg"/>
            </LineBotton>
        </>


    )

}

export default Title;