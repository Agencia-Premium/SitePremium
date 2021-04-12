import React from 'react';

import {LineMid, NameTitulo, SubTitulo} from './styles';

const TitleMid: React.FC = ({}) => {
    return(
        <>
            <LineMid>
                <NameTitulo>Nossos Clientes</NameTitulo>
                <img src="line_botton.svg"></img>
                <SubTitulo>Estes são alguns de nossos clientes,</SubTitulo>
            </LineMid>
        </>

    )
}

export default TitleMid;