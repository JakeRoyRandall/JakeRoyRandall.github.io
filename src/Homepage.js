import React, { Component } from 'react';
import { RoughNotation } from "react-rough-notation";
import './Homepage.css';

const loves = [
  'I ❤️ Magic the Gathering'
, 'I ❤️ competitive at-home Jeopardy'
, 'I ❤️ ancient mythologies'
, 'I ❤️ new music fridays'
, 'I ❤️ obtuse philosophy'
, 'I ❤️ being a Pathfinder nerd'
, 'I ❤️ my little sister'
, 'I ❤️ biographies of genius'
, 'I ❤️ chicken wings'
, 'I ❤️ Modest Mouse'
, 'I ❤️ Good Eats'
, 'I ❤️ Going to art museums'
, 'I ❤️ Cards Against Humanity'
, 'I ❤️ WTF with Marc Maron'
, 'I ❤️ finishing a good book'
, 'I ❤️ brain breaking physics'
, 'I ❤️ watching Tiny Desk Concerts'
, 'I ❤️ a creamy milk stout'
, 'I ❤️ Friedrich Nietzsche'
, 'I ❤️ failing fast'
, 'I ❤️ the Beatles'
, 'I ❤️ biking in the city'
, 'I ❤️ building with Legos'
, 'I ❤️ trying new things'
, 'I ❤️ Anthony Bourdain (RIP)'
, 'I ❤️ the movie Amadeus'
, 'I ❤️ fat stacks of cash'
, 'I ❤️ Civilization by Sid Meier'
, 'I ❤️ a medium rare rack of lamb'
, 'I ❤️ sour & funky beers'
, 'I ❤️ stand up comedy'
, 'I ❤️ Led Zeppelin'
, 'I ❤️ finding the right words'
, 'I ❤️ a well matched debate'
, 'I ❤️ films by Quentin Terantino'
, 'I ❤️ chicken & waffles'
, 'I ❤️ working with creative people'
, 'I ❤️ watching TED talks'
, 'I ❤️ discovering San Diego'
, 'I ❤️ the XX'
, 'I ❤️ the color yellow'
, 'I ❤️ cryptozoology'
, 'I ❤️ spicy tuna sushi'
, 'I ❤️ Tyler the Creator'
, 'I ❤️ crazy entrepreneurs'
, 'I ❤️ YouTube University'
, 'I ❤️ questioning authority'
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

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: `#F0B83C`,
            colorIndex: 0,
            love: `I ❤️ Magic the Gathering`,
            loveIndex: 0,
            lastTime: 0,
            blogLine: false,
            githubLine: false,
            linkedInLine: false,
            resumeLine: false,
            contactLine: false,
            animationType: "underline"
        }
    }

    colorChange = () => {
        var { colorIndex, loveIndex, lastTime } = this.state
        var curTime = new Date().valueOf()
        if (curTime - 250 >= lastTime) {
            lastTime = new Date().valueOf()
            colorIndex = colorIndex + 1
            if (colorIndex >= colors.length) { colorIndex = 0 }
            loveIndex = loveIndex + 1
            if (loveIndex >= loves.length) { loveIndex = 0 }
            this.setState({ 
                color: colors[colorIndex], 
                colorIndex: colorIndex,
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
            case "blog":
                this.setState({ blogLine: true, animationType: animation })
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
            blogLine: false, 
            githubLine: false, 
            linkedInLine: false, 
            resumeLine: false, 
            contactLine: false
        })
    }

    render() {
        const { color, 
                love, 
                blogLine, 
                githubLine, 
                linkedInLine, 
                resumeLine, 
                contactLine, 
                animationType } = this.state

        return (
            <div id="bigColor" style={{ backgroundColor: color }} onMouseMove={ this.colorChange }>
                <div id="textBody">
                    <h1>hi i'm jake!</h1>
                    <h4>I'm a fullstack developer living in sunny San Diego. Currently drinking too much coffee, learning Python, & getting excited about AI. Open to new projects & opportunities!</h4>
                    <h4>{ love }</h4>
                    <div id="homeLinks">
                        <a  href="www.google.com" 
                            onMouseEnter={() => this.randAnimation("blog")} 
                            onMouseLeave={() => this.clearAnimation("blog")}>
                            <RoughNotation type={ animationType } 
                                animationDuration="1200" 
                                strokeWidth="3" 
                                show={ blogLine }>
                                    blog
                            </RoughNotation>
                        </a>
                        <a  href="https://github.com/JakeRoyRandall" target="_blank" rel="noopener noreferrer" 
                            onMouseEnter={() => this.randAnimation("github")}
                            onMouseLeave={() => this.clearAnimation("github")}>
                            <RoughNotation type={ animationType } 
                                animationDuration="1200" 
                                strokeWidth="3" 
                                show={ githubLine }>
                                    github
                            </RoughNotation>
                        </a>
                        <a  href="https://www.linkedin.com/in/jake-r-randall" target="_blank" rel="noopener noreferrer" 
                            onMouseEnter={() => this.randAnimation("linkedIn")} 
                            onMouseLeave={() => this.clearAnimation("linkedIn")}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="3"  
                                show={ linkedInLine }>
                                    linkedIn
                            </RoughNotation>
                        </a>
                        <a  href="/JakeRandallResume.pdf" target="_blank"
                            onMouseEnter={() => this.randAnimation("resume")}
                            onMouseLeave={() => this.clearAnimation("resume")}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="3" 
                                show={ resumeLine }>
                                    resume
                            </RoughNotation>
                        </a>
                        <a  href="mailto:hello@jakerandall.me?subject=Website%20Contact" target="_blank" rel="noopener noreferrer"
                            onMouseEnter={() => this.randAnimation("contact")}
                            onMouseLeave={() => this.clearAnimation("contact")}>
                            <RoughNotation type={ animationType }
                                animationDuration="1200" 
                                strokeWidth="3" 
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
