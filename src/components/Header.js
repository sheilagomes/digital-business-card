import React from "react"
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return(
        <header>
            <div className="header--image"></div>
            <div className="header--text">
                <h1 className="header--name">Sheila Gomes</h1>
                <p className="header--title">Localization Engineer</p>
                <p><a className="header--site-link" href="https://www.multitude.trd.br">multitude.trd.br</a></p>
                <div className="header--button">
                    <a href="mailto:sheilagomes@vtex.com.br"><button className="header--button-left"><FontAwesomeIcon icon="envelope" />Email</button></a>
                    <a href="https://br.linkedin.com/in/sheilagomes"><button className="header--button-right"><FontAwesomeIcon icon={['fab', 'linkedin']} />Linkedin</button></a>
                </div>
            </div>
        </header>
    )
}