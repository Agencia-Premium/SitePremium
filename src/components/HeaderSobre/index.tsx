import React from 'react';

import * as S from './styles'
const HeaderSobre: React.FC = ({}) => {
    return(

        <>
            <S.Wrapper>
                <S.ContainerTrofeu>
                    <img src="trofeu (2).webp" alt="troféu dourado" />
                </S.ContainerTrofeu>

                <S.ContainerText>
                    <h1>Conheça a</h1>
                    <span>Premium!</span>
                </S.ContainerText>
            </S.Wrapper>
        </>
    )
}

export default HeaderSobre;