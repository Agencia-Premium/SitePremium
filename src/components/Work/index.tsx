import React from 'react'

import * as S from './styles'

const Work = () => {
    return (
        <>
            <S.Wrapper>
                <S.Left>
                    <h1>
                        <img src="./hastag.svg" />
                        Faça
                    </h1>
                    <h2>parte do <br /> time!</h2>
                    <div className="informations">
                        <p>Venha para a <br /> maior do estado</p>
                        <img src="./arrow-right.svg" />
                    </div>
                </S.Left>
                <S.Right></S.Right>
            </S.Wrapper>
        </>
    )
}

export default Work
