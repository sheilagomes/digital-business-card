import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faEnvelope, faLinkedin, faGithub, faYoutube)

export default function App() {
    return(
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}