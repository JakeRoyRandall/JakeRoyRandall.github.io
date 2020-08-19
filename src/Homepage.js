import React, { Component } from 'react';
import './app.css';
import { RoughNotation } from 'react-rough-notation';
import Projects from './projects'
import LSP from './lsp'
import IPB from './ipb'
import CRS from './crs'
import Battleship from './battleship'
import Personal from './personal'

const techs = [
     'React'
    ,'AWS'
    ,'Ruby'
    ,'Bootstrap'
    ,'MongoDB'
    ,'Firebase'
    ,'Javascript'
    ,'Github'
    ,'TensorFlow'
    ,'DynamoDB'
    ,'HTML5'
    ,'Flask'
    ,'Ruby-on-Rails'
    ,'Material-UI'
    ,'Python'
    ,'Postgres'
    ,'Gatsby.js'
    ,'PHP'
    ,'AWS RDS'
    ,'Google Cloud'
    ,'Docker'
    ,'CSS3'
    ,'jQuery'
    ,'SQL'
]

const loves = [
    'I ❤️ making new friends 👋'
    , 'I ❤️ Jeopardy'
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
    , 'I 🤯 mind-blowing physics'
    , 'I ❤️ Tiny Desk Concerts'
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
    , "I ❤️ Sid Meier's Civilization"
    , 'I ❤️ a rare rack of lamb'
    , 'I ❤️ sour & funky beers 🍻'
    , 'I ❤️ E.E. Cummings'
    , 'I ❤️ stand up comedy'
    , 'I ❤️ well commented code'
    , 'I ❤️ Led Zeppelin'
    , 'I ❤️ finding the right words'
    , 'I ❤️ a well matched debate'
    , 'I ❤️ 🎥 by Quentin Terantino'
    , 'I ❤️ chicken & waffles'  
    , 'I ❤️ creative people 👩‍🎨'
    , 'I ❤️ watching TED talks'
    , 'I ❤️ discovering San Diego'
    , 'I ❤️ the XX'
    , 'I ❤️ great documentation'
    , 'I ❤️ the color yellow'
    , 'I ❤️ spicy tuna rolls 🍣'
    , 'I ❤️ Tyler the Creator'
    , 'I ❤️ crazy entrepreneurs'
    , 'I ❤️ YouTube University 🎓'
    , 'I ❤️ strong coffee'
    , 'I ❤️ the Strokes'
    , 'I ❤️ sriracha on hotdogs'
    , 'I ❤️ paintings by Dali'
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
            projectsModal: false,
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
            closeLine: false,
            lspLine: false,
            ipbLine: false,
            crsLine: false,
            battleLine: false,
            siteLine: false,
            animationType: "underline",
            hoverEnabled: true,
            element: 1,
            project: "projects",
        }
    }

    componentDidMount = () => {
        let hoverEnabled
        window.matchMedia("(hover: hover)").matches ? hoverEnabled = true : hoverEnabled = false
        !hoverEnabled && window.setInterval(this.goWild, 800)
        this.setState({hoverEnabled: hoverEnabled})
    }

    goWild = () => {
        let { colorIndex, techIndex, loveIndex, element } = this.state
        if (element % 3 === 1) {
            colorIndex = colorIndex + 1
            if (colorIndex >= colors.length) { colorIndex = 0 }
            this.setState({ 
                color: colors[colorIndex], 
                colorIndex: colorIndex,
                element: element + 1})
        }
        
        else if (element % 3 === 2) {
            techIndex = techIndex + 1
            if (techIndex >= techs.length) { techIndex = 0 }
            this.setState({ 
                tech: techs[techIndex],
                techIndex: techIndex,
                element: element + 1})
        }
        
        else if (element % 3 === 0) {
            loveIndex = loveIndex + 1
            if (loveIndex >= loves.length) { loveIndex = 0 }
            this.setState({ 
                love: loves[loveIndex],
                loveIndex: loveIndex,
                element: element + 1})
        }
    }

    colorChange = () => {
        let { colorIndex, techIndex, loveIndex, lastTime } = this.state
        let curTime = new Date().valueOf()
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
        if (this.state.hoverEnabled) {
            let animationTypes = ["underline", "box", "circle"]
            let randNumber = Math.floor(Math.random() * 3)
            let animation = animationTypes[randNumber]
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
                case "close":
                    this.setState({ closeLine: true, animationType: animation })
                    break;
                case "lsp":
                    this.setState({ lspLine: true, animationType: animation })
                    break;
                case "ipb":
                    this.setState({ ipbLine: true, animationType: animation })
                    break;
                case "crs":
                    this.setState({ crsLine: true, animationType: animation })
                    break;
                case "battle":
                    this.setState({ battleLine: true, animationType: animation })
                    break;
                case "site":
                    this.setState({ siteLine: true, animationType: animation })
                    break;
                default:
                    this.setState({ animationType: animation})
            }
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
            closeLine: false,
            lspLine: false,
            ipbLine: false,
            crsLine: false,
            battleLine: false,
            siteLine: false,
        })
    }

    modalSwitch = () => {
        this.clearAnimation()
        if (this.state.project !== "projects") {
            this.setState({project: "projects"})
        } else {
            this.setState({projectsModal: !this.state.projectsModal})
        }
    }

    projectView = (project) => {
        this.setState({project: project})
    }
    render() {
        const { 
                color,
                tech,
                love,
                projectsModal,
                appsLine,
                poetryLine,
                sneakerLine, 
                projectsLine, 
                githubLine, 
                linkedInLine, 
                resumeLine, 
                contactLine, 
                closeLine,
                lspLine,
                ipbLine,
                siteLine,
                animationType,
                project 
            } = this.state

        return (
            <div className="background" style={{ backgroundColor: color }} onMouseMove={ this.colorChange }>
                { !projectsModal && 
                <div className="container">
                    <h1 className="heading text">hi i'm jake!</h1>
                    <p className="text">I'm a software engineer <span role="img" aria-label="man technologist">👨‍💻 </span>
                        living in <span role="img" aria-label="sun">☀️</span> San Diego. I make beautiful, functional apps using modern technologies including: { tech }<br/><br/>
                        {/* <span
                            onClick={ this.modalSwitch }
                            target="_blank" className="bodyLinks"
                            onMouseEnter={() => this.randAnimation("apps")} 
                            onMouseLeave={() => this.clearAnimation()}>
                            <RoughNotation type={ animationType === "circle" ? "underline" : "box" } 
                                animationDuration="1200" 
                                strokeWidth="4"
                                show={ appsLine }>
                                    <span className="nobreak"> beautiful, functional apps </span>
                            </RoughNotation>
                        </span> */}
                        {/* using modern technologies including: { tech }<br/><br/> */}
                        In my free time I teach <span role="img" aria-label="robot face">🤖 </span>to
                        <a  href="https://insta-poet-bot.web.app/" target="_blank" 
                            rel="noopener noreferrer" className="bodyLinks" onMouseEnter={() => this.randAnimation("poetry")} onMouseLeave={() => this.clearAnimation("poetry")}>
                            <RoughNotation type={ animationType === "circle" ? "underline" : "box"} animationDuration="1000" strokeWidth="4" show={ poetryLine }>
                            <span className="nobreak"> write poetry </span>
                            </RoughNotation>
                        </a>&<a  href="#" 
                            rel="noopener noreferrer" className="bodyLinks" onMouseEnter={() => this.randAnimation("sneaker")} onMouseLeave={() => this.clearAnimation("sneaker")}>
                            <RoughNotation type={ animationType === "circle" ? "underline" : "box"} animationDuration="1000" strokeWidth="4" show={ sneakerLine }>
                            <span className="nobreak"> trade sneakers </span>
                            </RoughNotation>
                        </a>in a plot for 🌎 domination.<br/><br/>
                        <span className="love mobile">{ love }</span>
                        <div className="mlandscape">
                            <p>
                                <a  href="https://github.com/JakeRoyRandall" target="_blank">Check out my Github 👀</a> |
                                <a  href="https://www.linkedin.com/in/jake-r-randall" target="_blank"> Connect 🤝 on LinkedIn </a> |
                                {/* <span className="pspace">&nbsp;&nbsp;&nbsp;</span> */}
                                <a  href="mailto:hello@jakerandall.me?subject=Website%20Contact" target="_blank"> Get In Touch! 💌</a>
                            </p>
                        </div>
                        <div className="mportrait">
                            <p>
                                <a  href="https://github.com/JakeRoyRandall" target="_blank">Check out my Github 👈</a></p>
                                <p>
                                <a  href="https://www.linkedin.com/in/jake-r-randall" target="_blank">Connect 🤝 on LinkedIn </a>
                                </p>
                                <p>
                                {/* <span className="pspace">&nbsp;&nbsp;&nbsp;</span> */}
                                <a  href="mailto:hello@jakerandall.me?subject=Website%20Contact" target="_blank">✍️ Get In Touch! 💌</a>
                            </p>
                        </div>
                        <span className="love nonMobile">{ love }</span>
                    </p>
                    <div className="nav">
                        {/* <span  
                            className="nav"
                            onClick={ this.modalSwitch }
                            onMouseOver={() => this.randAnimation("projects")} 
                            onMouseLeave={() => this.clearAnimation()}>
                            <RoughNotation type={ animationType } 
                                animationDuration="1200" 
                                strokeWidth="4"
                                show={ projectsLine }>
                                    projects
                            </RoughNotation>
                        </span> */}
                        <a  href="https://github.com/JakeRoyRandall" target="_blank" 
                            rel="noopener noreferrer" className="nav"
                            onMouseOver={() => this.randAnimation("github")}
                            onMouseLeave={() => this.clearAnimation()}>
                            <RoughNotation type={ animationType } 
                                animationDuration="1200" 
                                strokeWidth="4"
                                show={ githubLine }>
                                    github
                            </RoughNotation>
                            </a>
                        <a  href="https://www.linkedin.com/in/jake-r-randall" target="_blank" 
                            rel="noopener noreferrer" className="nav"
                            onMouseOver={() => this.randAnimation("linkedIn")} 
                            onMouseLeave={() => this.clearAnimation()}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="4"
                                show={ linkedInLine }>
                                    linkedIn
                            </RoughNotation>
                        </a>
                        <a  href="./JakeRandallResume.pdf" target="_blank"
                            className="nav"
                            onMouseOver={() => this.randAnimation("resume")}
                            onMouseLeave={() => this.clearAnimation()}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="4"
                                show={ resumeLine }>
                                    resume
                            </RoughNotation>
                        </a>
                        <span><a  href="mailto:hello@jakerandall.me?subject=Website%20Contact" target="_blank"
                            rel="noopener noreferrer" className="nav"
                            onMouseOver={() => this.randAnimation("contact")}
                            onMouseLeave={() => this.clearAnimation()}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="4"
                                show={ contactLine} >
                                    contact
                            </RoughNotation>
                        </a></span>
                    </div>
                </div>}
                {/* { projectsModal && 
                
                    <div className="container">
                        {project === "projects"      &&
                            <div className="project">
                                <h1 className="subheading text">my favorite projects</h1>
                                <span onClick={() => this.projectView("lsp")}>learn student platform</span>
                                <span onClick={() => this.projectView("ipb")}>insta-poet-bot</span>
                                <span onClick={() => this.projectView("site")}>this site</span>
                            </div>
                        }
                        {project === "lsp"           && <LSP         />}
                        {project === "ipb"           && <IPB         />}
                        {project === "site"          && <Personal    />}
                        <div className="nav">
                            <span className="nav"  
                            onClick={ this.modalSwitch }
                            onMouseOver={() => this.randAnimation("close")} 
                            onMouseLeave={() => this.clearAnimation()}>
                                <RoughNotation type={ animationType } 
                                    animationDuration="1200" 
                                    strokeWidth="4" 
                                    show={ closeLine }>
                                        back
                                </RoughNotation>
                            </span>
                        </div>
                    </div> } */}
        </div>
        )
    }
}

export default Homepage