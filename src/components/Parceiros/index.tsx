import React from 'react'

import * as S from './styles'
import { ListParceiros } from './constants'

const Parceiros: React.FC = ({}) => {
    return (
        <>
            <S.Wrapper>
                {ListParceiros.map(( item, index ) => {
                    return <img key={index} src={item.image} />
                })}
            </S.Wrapper>
        </>
    )
}

export default Parceiros;