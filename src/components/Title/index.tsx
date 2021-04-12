import React from 'react';

import {NameTitulo, LineBotton, SubTitulo} from './styles';

const Title: React.FC = ({}) => {
    return(
        <>
            <LineBotton>
                <NameTitulo>Nossos Serviços</NameTitulo>
                <img src="line_botton.svg"/>
                <SubTitulo>Desempenhamos diversas atividades e funções que tem como objetivo trazer seu negócio para o online, ou fazer com que ele ganha mais força e atraia potênciais clientes.</SubTitulo>
            </LineBotton>
            
        </>
    )

}

export default Title;