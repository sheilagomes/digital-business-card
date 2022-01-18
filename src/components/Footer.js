import React from "react"
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return(
        <footer className="footer--container">
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" className="footer--icon" />
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="footer--icon" />
        </footer>
    )
}