import React from 'react';
import octocat from './images/octocat_logo.png'
import react from './images/react_logo.png'
import rails from './images/rails_logo.png'
import postgres from './images/postgresql_logo.svg.png'
import heroku from './images/heroku_logo.png'

const LSP = () => {
    return (
        <div className="project">
            <h1 className="heading">learn student platform <img className="octocat" alt="github logo" src={ octocat }/></h1>
            <p>The LEARN student platform aspires to be a comprehensive resource for learning React-on-Rails development in conjunction with the LEARN academy curriculum.</p>
            <p>The open source nature of the project is to encourage students & alumni to build out tools and provide resources to support the learning process.</p>
            <p className="techs" >techs used: 
                <img className="tech" alt="react logo"     src={ react }/>
                <img className="tech" alt="rails logo"     src={ rails }/>
                <img className="tech" alt="postgres logo"  src={ postgres }/>
                <img className="tech" alt="heroku logo"    src={ heroku }/>
            </p>
        </div>
    )
}

export default LSP