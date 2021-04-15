import React from 'react'
import * as S from './styles'

export type ButtonProps = {
    scale: 'small' | 'medium'
    background: 'gray' | 'yellow'
}

const Button: React.FC<ButtonProps> = ({ scale, background, children }) => {
    return (
        <>
            <S.Wrapper scale={scale} background={background}>{children}</S.Wrapper>
        </>
    )
}

export default Button