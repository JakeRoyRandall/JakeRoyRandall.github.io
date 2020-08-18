import React from 'react';
import octocat from './images/octocat_logo.png'
import react from './images/react_logo.png'
import rails from './images/rails_logo.png'
import postgres from './images/postgresql_logo.svg.png'
import heroku from './images/heroku_logo.png'
import learnStudents from './images/learn_students_logo.png'
import { RoughNotation } from 'react-rough-notation';

const LSP = () => {
    return (
        <div className="project">
            <h1 className="subheading text">learn student platform</h1>
            <p>The LEARN student platform aspires to be a comprehensive resource for learning React-on-Rails development in conjunction with the LEARN academy curriculum.</p>
            <p>The open source nature of the project is to encourage students & alumni to build out tools and provide resources to support the learning process.</p>
            <p>techs used:</p>
            <div className="techs">
                <img className="tech" alt="react logo"     src={ react }/>
                <img className="tech" alt="rails logo"     src={ rails }/>
                <img className="tech" alt="postgres logo"  src={ postgres }/>
                <img className="tech" alt="heroku logo"    src={ heroku }/>
                <img className="tech" alt="github logo" src={ octocat }/>
            </div>
        </div>
    )
}

export default LSP

{/* <RoughNotation type="box"
animationDuration="1200" 
strokeWidth="4" 
show="true">
    <br/><p>github</p>
</RoughNotation> */}

{/* <a href="https://obscure-reaches-13754.herokuapp.com/" target="_blank" rel="noopener noreferrer">
<img className="tech" alt="learn student platform logo" src={ learnStudents }/>
</a> */}