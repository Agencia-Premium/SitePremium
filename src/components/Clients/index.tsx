import React from 'react';

import { Logos } from './constants'

import {
    ClientsSection as Section,
} from './styles'

const Clients: React.FC = () => {
    return (
        <Section>
            <div className="container-clients">
                <div className="logo-list">
                    {
                        Logos.map((logo, index) => {
                            return<img key={index} src={logo} alt="logo do cliente"/>
                        } )
                    }
                </div>
            </div>
        </Section>
    )
}

export default Clients;