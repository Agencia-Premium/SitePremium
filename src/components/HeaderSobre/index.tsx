import React from 'react';
// import {HeaderContainer, BkgContainer, Left, Right} from './styles'

import * as S from './styles'
const HeaderSobre: React.FC = ({}) => {
    return(

        // <>
        //     <HeaderContainer>
        //         <BkgContainer>
        //             <Left>
        //                 <img src="TrofeuSobre.webp" alt="troféu dourado" />
        //             </Left>
        //             <Right>
        //                 <h1>Conheça a <br/><span>Premium!</span></h1>
        //             </Right>
        //         </BkgContainer>
        //     </HeaderContainer>
        // </>

        <>
            <S.Wrapper>
                <S.ContainerTrofeu>
                    <img src="TrofeuSobre.webp" alt="troféu dourado" />
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