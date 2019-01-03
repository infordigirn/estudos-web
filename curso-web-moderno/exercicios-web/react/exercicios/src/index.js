import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
    <Fragment>
        <Pai nome="Renato" sobrenome="Oliveira">
            <Filho nome="Gabriel"/>
            <Filho nome="Renato"/>
            <Filho nome="Glenda"/>
        </Pai>
    </Fragment>
    , document.getElementById('root')
)