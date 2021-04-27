import React from 'react'
import * as S from './styles'

export type CardWorkProps = {
    image: string
    title: string
    description: string
}

const CardWork = ({ image, title, description }: CardWorkProps) => {
    return (
        <>
            <S.Wrapper>
                <img src="./social-media.webp" />
                <h1>Social Media</h1>
                <p>Monitoramento de Redes Sociais</p>
            </S.Wrapper>
        </>
    )
}

export default CardWork;