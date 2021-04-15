import React from 'react';

import {ContainerContact} from './style';

const FooterContact: React.FC = ({}) => {
    return(
        <>
            <ContainerContact>
                {/* <div className="container"> */}
                    <img className="circlo" src="circulo.svg"/>
                    <div>
                        <img src="phone.svg"/> 
                    </div>
                    <p>(69) 4002-8922</p>
                    
                    <div>
                        <img src="mail.svg"/>
                    </div> 

                    <p>contato@agenciapremium.br</p>
                    <div>
                        <img src="local.svg"/>
                    </div>

                    <p>Rua 2 de Abril</p>
                {/* </div> */}
            </ContainerContact>
        </>
        );
};

export default FooterContact;