import React from 'react'
import CardWork from '../CardWork'
import WorkSlider from '../WorkSlider'
import {Container} from '../Container'
import { HomeProps } from '../../pages/index'

import * as S from './styles'

const Work = ({ data }: HomeProps) => {
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
                        <p>Venha para a <br /> maior do estado!</p>
                        <img src="./arrow-right.svg" />
                    </div>
                </S.Left>
                <S.Right>
                   <WorkSlider data={data} />
                </S.Right>
            </S.Wrapper>
        </>
    )
}

export default Work
