import React, { Component } from 'react';
import { RoughNotation } from "react-rough-notation";
import './Homepage.css';

const techs = [
     'React'
    ,'AWS Elastic Beanstalk'
    ,'Ruby'
    ,'Bootstrap'
    ,'MongoDB'
    ,'Firebase'
    ,'Javascript'
    ,'Github'
    ,'TensorFlow'
    ,'AWS Dynamo DB'
    ,'HTML5 & CSS3'
    ,'Flask'
    ,'Ruby-on-Rails'
    ,'Material-UI'
    ,'Python'
    ,'Postgres'
    ,'Gatsby.js'
    ,'PHP'
    ,'AWS RDS'
    ,'Google Cloud Compute'
    ,'Docker'
    ,'jQuery'
    ,'SQL'
]

const loves = [
    'I ❤️ making new friends 👋'
    , 'I ❤️ competitive at-home Jeopardy'
    , 'I ❤️ new music fridays'
    , 'I ❤️ obtuse philosophy'
    , 'I ❤️ rolling for initiative'
    , 'I ❤️ my little sister'
    , 'I ❤️ biographies'
    , 'I ❤️ crazy-hot chicken wings'
    , 'I ❤️ hiking lake Calavera 🌋'
    , 'I ❤️ Modest Mouse'
    , 'I ❤️ Good Eats'
    , 'I ❤️ going to art museums'
    , 'I ❤️ TabNine for VS Code'
    , 'I ❤️ the Tim Ferriss Show'
    , 'I ❤️ finishing a good book'
    , 'I ❤️ brain breaking physics 🤯'
    , 'I ❤️ watching Tiny Desk Concerts'
    , 'I ❤️ a creamy milk stout'
    , 'I ❤️ Friedrich Nietzsche'
    , 'I ❤️ failing fast'
    , 'I ❤️ the Beatles'
    , 'I ❤️ biking in the city 🚴‍♂️'
    , 'I ❤️ building with Legos'
    , 'I ❤️ trying new things'
    , 'I ❤️ tidy code'
    , 'I ❤️ Anthony Bourdain (RIP)'
    , 'I ❤️ the movie Amadeus'
    , 'I ❤️ Civilization by Sid Meier'
    , 'I ❤️ a medium rare rack of lamb'
    , 'I ❤️ sour & funky beers 🍻'
    , 'I ❤️ the poems of E.E. Cummings'
    , 'I ❤️ stand up comedy'
    , 'I ❤️ well commented code'
    , 'I ❤️ Led Zeppelin'
    , 'I ❤️ Willy Wonka & the 🍫 Factory'
    , 'I ❤️ finding the right words'
    , 'I ❤️ a well matched debate'
    , 'I ❤️ films by Quentin Terantino'
    , 'I ❤️ chicken & waffles'  
    , 'I ❤️ working with creative people 👩‍🎨'
    , 'I ❤️ watching TED talks'
    , 'I ❤️ discovering San Diego'
    , 'I ❤️ the XX'
    , 'I ❤️ straightforward API documentation'
    , 'I ❤️ the color yellow'
    , 'I ❤️ spicy tuna rolls 🍣'
    , 'I ❤️ Tyler the Creator'
    , 'I ❤️ crazy entrepreneurs'
    , 'I ❤️ YouTube University 🎓'
    , 'I ❤️ strong coffee'
    , 'I ❤️ the Strokes'
    , 'I ❤️ sriracha on hotdogs'
    , 'I ❤️ paintings by Dali'
    , 'I ❤️ (insert something interesting here)'
    , 'I ❤️ a well designed UX'
]

const colors = [
      `#F0B83C`, `#F1C246`, `#F3CD4F`, `#F4D759`
    , `#F5E163`, `#EEDE5B`, `#E7DB54`, `#E0D84C`
    , `#D9D544`, `#cbd342`, `#bdd13f`, `#aece3d`
    , `#A0CC3B`, `#9bcb48`, `#95ca56`, `#90c964`
    , `#8AC871`, `#7fc572`, `#74c373`, `#69c074`
    , `#5EBD75`, `#47bb7b`, `#2fb981`, `#18b788`
    , `#00B58E`, `#00b19a`, `#00aea7`, `#00aab3`
    , `#00A6BF`, `#00a1b9`, `#009bb3`, `#0095ac`
    , `#0090A6`, `#0090A6`, `#0095ac`, `#009bb3`
    , `#00a1b9`, `#00A6BF`, `#00aab3`, `#00A6BF`
    , `#00aab3`, `#00aea7`, `#00b19a`, `#00B58E`
    , `#18b788`, `#2fb981`, `#47bb7b`, `#5EBD75`
    , `#69c074`, `#74c373`, `#7fc572`, `#8AC871`
    , `#90c964`, `#95ca56`, `#9bcb48`, `#A0CC3B`
    , `#aece3d`, `#bdd13f`, `#cbd342`, `#D9D544`
    , `#E0D84C`, `#E7DB54`, `#EEDE5B`, `#F5E163`
    , `#F4D759`, `#F3CD4F`, `#F1C246`
]

// const learnStudentApp = "https://obscure-reaches-13754.herokuapp.com/"
// const instaPoetBot= "https://insta-poet-bot.web.app/"
class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: colors[0],
            colorIndex: 0,
            tech: techs[0],
            techIndex: 0,
            love: loves[0],
            loveIndex: 0,
            lastTime: 0,
            appsLine: false,
            rubyLine: false,
            pythonLine: false,
            javascriptLine: false,
            poetryLine: false,
            sneakerLine: false,
            projectsLine: false,
            githubLine: false,
            linkedInLine: false,
            resumeLine: false,
            contactLine: false,
            animationType: "underline"
        }
    }

    colorChange = () => {
        var { colorIndex, techIndex, loveIndex, lastTime } = this.state
        var curTime = new Date().valueOf()
        if (curTime - 250 >= lastTime) {
            lastTime = new Date().valueOf()
            colorIndex = colorIndex + 1
            if (colorIndex >= colors.length) { colorIndex = 0 }
            techIndex = techIndex + 1
            if (techIndex >= techs.length) { techIndex = 0 }
            loveIndex = loveIndex + 1
            if (loveIndex >= loves.length) { loveIndex = 0 }
            this.setState({ 
                color: colors[colorIndex], 
                colorIndex: colorIndex,
                tech: techs[techIndex],
                techIndex: techIndex,
                love: loves[loveIndex],
                loveIndex: loveIndex,
                lastTime: lastTime
            })
        }
    }

    randAnimation = (element) => {
        const animationTypes = ["underline", "box", "circle"]
        var randNumber = Math.floor(Math.random() * 3)
        var animation = animationTypes[randNumber]
        switch (element) {
            case "apps":
                this.setState({ appsLine: true, animationType: animation })
                break;
            case "ruby":
                this.setState({ rubyLine: true, animationType: animation })
                break;
            case "python":
                this.setState({ pythonLine: true, animationType: animation })
                break;
            case "javascript":
                this.setState({ javascriptLine: true, animationType: animation })
                break;
            case "poetry":
                this.setState({ poetryLine: true, animationType: animation })
                break;
            case "sneaker":
                this.setState({ sneakerLine: true, animationType: animation })
                break;
            case "projects":
                this.setState({ projectsLine: true, animationType: animation })
                break;
            case "github":
                this.setState({ githubLine: true, animationType: animation })
                break;
            case "linkedIn":
                this.setState({ linkedInLine: true, animationType: animation })
                break;
            case "resume":
                this.setState({ resumeLine: true, animationType: animation })
                break;
            case "contact":
                this.setState({ contactLine: true, animationType: animation })
                break;
            default:
                this.setState({ animationType: animation})
        }

    }

    clearAnimation = () => {
        this.setState({
            appsLine: false, 
            rubyLine: false, 
            pythonLine: false, 
            javascriptLine: false, 
            projectsLine: false, 
            githubLine: false, 
            linkedInLine: false, 
            resumeLine: false, 
            contactLine: false,
            poetryLine: false,
            sneakerLine: false,
        })
    }

    render() {
        const { color,
                tech,
                love,
                appsLine,
                rubyLine,
                pythonLine,
                javascriptLine,
                poetryLine,
                sneakerLine, 
                projectsLine, 
                githubLine, 
                linkedInLine, 
                resumeLine, 
                contactLine, 
                animationType } = this.state

        return (
            <div id="bigColor" style={{ backgroundColor: color }} onMouseMove={ this.colorChange }>
                <div id="textBody">
                    <h1 id="hi">hi i'm jake!</h1>
                    <h3>I'm a software engineer <span role="img" aria-label="man technologist">👨‍💻</span>
                        &nbsp;living in <span role="img" aria-label="sun">☀️</span> San Diego. I make&nbsp;
                        <a  href="/projects" target="_blank" className="bodyLinks"
                            onMouseEnter={() => this.randAnimation("apps")} 
                            onMouseLeave={() => this.clearAnimation()}>
                            <RoughNotation type={ animationType === "circle" ? "underline" : "box" } 
                                animationDuration="1200" 
                                strokeWidth="4" 
                                show={ appsLine }>
                                    <span class="nobreak">beautiful, functional apps</span>
                            </RoughNotation>
                        </a>
                        &nbsp;using modern technologies including: { tech }<br/><br/>
                        In my free time I teach <span role="img" aria-label="robot face">🤖</span> to&nbsp;
                        <a  href="https://insta-poet-bot.web.app/" target="_blank" 
                            rel="noopener noreferrer" className="bodyLinks" onMouseEnter={() => this.randAnimation("poetry")} onMouseLeave={() => this.clearAnimation("poetry")}>
                            <RoughNotation type={ animationType === "circle" ? "underline" : "box"} animationDuration="1000" strokeWidth="4" show={ poetryLine }>
                            <span class="nobreak">write poetry&nbsp;</span>
                            </RoughNotation>
                        </a>&&nbsp;
                        <a  href="https://insta-poet-bot.web.app/" target="_blank" 
                            rel="noopener noreferrer" className="bodyLinks" onMouseEnter={() => this.randAnimation("sneaker")} onMouseLeave={() => this.clearAnimation("sneaker")}>
                            <RoughNotation type={ animationType === "circle" ? "underline" : "box"} animationDuration="1000" strokeWidth="4" show={ sneakerLine }>
                            <span class="nobreak">trade sneakers</span>
                            </RoughNotation>
                        </a>&nbsp;in a plot for 🌎 domination.
                    </h3>
                    <h3>{ love }</h3>
                    <div id="homeLinks">
                        <a  href="/projects" target="_blank" className="homeLinks"
                            onMouseEnter={() => this.randAnimation("projects")} 
                            onMouseLeave={() => this.clearAnimation("projects")}>
                            <RoughNotation type={ animationType } 
                                animationDuration="1200" 
                                strokeWidth="4" 
                                show={ projectsLine }>
                                    projects
                            </RoughNotation>
                        </a>
                        <a  href="https://github.com/JakeRoyRandall" target="_blank" 
                            rel="noopener noreferrer" className="homeLinks"
                            onMouseEnter={() => this.randAnimation("github")}
                            onMouseLeave={() => this.clearAnimation("github")}>
                            <RoughNotation type={ animationType } 
                                animationDuration="1200" 
                                strokeWidth="4" 
                                show={ githubLine }>
                                    github
                            </RoughNotation>
                        </a>
                        <a  href="https://www.linkedin.com/in/jake-r-randall" target="_blank" 
                            rel="noopener noreferrer" className="homeLinks"
                            onMouseEnter={() => this.randAnimation("linkedIn")} 
                            onMouseLeave={() => this.clearAnimation("linkedIn")}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="4"  
                                show={ linkedInLine }>
                                    linkedIn
                            </RoughNotation>
                        </a>
                        <a  href="./JakeRandallResume.pdf" target="_blank"
                            className="homeLinks"
                            onMouseEnter={() => this.randAnimation("resume")}
                            onMouseLeave={() => this.clearAnimation("resume")}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="4" 
                                show={ resumeLine }>
                                    resume
                            </RoughNotation>
                        </a>
                        <a  href="mailto:hello@jakerandall.me?subject=Website%20Contact" target="_blank"
                            rel="noopener noreferrer" className="homeLinks"
                            onMouseEnter={() => this.randAnimation("contact")}
                            onMouseLeave={() => this.clearAnimation("contact")}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="4" 
                                show={ contactLine} >
                                    contact
                            </RoughNotation>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage