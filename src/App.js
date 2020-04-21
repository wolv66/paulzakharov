import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Toolbar from './components/Navigation/NavBar/NavBar'
import Home from './components/Home/Home'

class App extends Component {
  state = {
    isMenuOpen: false,
    showHardSkillList: true,
    warningWindow: true,
    pageIdNowIsOpen: 0,
    links: [
      {
        linkName: 'Home',
        linkId: 0,
        link: '/paulzakharov'
      },
      {
        linkName: 'Portfolio',
        linkId: 1,
        link: '/portfolio'
      },
      {
        linkName: 'About',
        linkId: 2,
        link: '/about'
      },
      {
        linkName: 'Contact',
        linkId: 3,
        link: '/contact'
      }
    ],
    hardSkills: [
      'My Hard Skills: ',
      {
        hardSkillId: 1,
        typeOfSkill: 'Languages',
        HardSkillDescription: 'JavaScript, TypeScript, ES6+'
      },
      {
        hardSkillId: 2,
        typeOfSkill: 'Frameworks',
        HardSkillDescription: 'React (inc. React.Hooks, Redux)' 
      },
      {
        hardSkillId: 3,
        typeOfSkill: 'Server-side',
        HardSkillDescription: 'Node.js, npm, npm scripts, Yarn, Create React App'
      },
      {
        hardSkillId: 4,
        typeOfSkill: 'UI & UX',
        HardSkillDescription: 'UI & UX: Cross-browser, Adaptive, Responsive, Accessible, Mobile-first, Offline-first, Graceful degradation, Progressive enhancement, Performance'
      },
      {
        hardSkillId: 5,
        typeOfSkill: 'Layout / template',
        HardSkillDescription: 'HTML, HTML5, JSX'
      },
      {
        hardSkillId: 6,
        typeOfSkill: 'Styles',
        HardSkillDescription: 'CSS, CSS3, JSS, CSS-in-JS, PostCSS'
      },
      {
        hardSkillId: 7,
        typeOfSkill: 'Utility libraries',
        HardSkillDescription: 'jQuery, React router, Redux form'
      },
      {
        hardSkillId: 8,
        typeOfSkill: 'UI libraries',
        HardSkillDescription: 'Bootstrap, Material UI'
      },
      {
        hardSkillId: 9,
        typeOfSkill: 'Version control',
        HardSkillDescription: 'Git, GitHub, Bitbucket'
      }

    ],
    softSkills: [
      'My Soft Skills: ',
      {
        softSkillId: 1,
        softSkillDescription: 'Extremely friendly'

      },
      {
        softSkillId: 2,
        softSkillDescription: 'Excellent Time Management'
      },
      {
        softSkillId: 3,
        softSkillDescription: 'Natural born explorer'
      },
      {
        softSkillId: 4,
        softSkillDescription: 'Unstoppable learner'
      },
      {
        softSkillId: 5,
        softSkillDescription: 'Always hungry for new knowledge teamplayer'
      },
      {
        softSkillId: 6,
        softSkillDescription: 'Smart and curious optimizer'
      }
    ],
    experience: [
      {
        experienceId: 0,
        company: 'Ekit',
        when: 'March 2019 - March 2020',
        duties: ['Helping senior front-end developer to create web-site ', 'Learinig CSS/HTML/JS', 'Debugging', 'Creating different components using React', 
      'Trying to be very creative to bring different ideas in UX and UI']

      }
    ]
  }

  openToggleMenu = () => {
    this.setState(prevState => {
      return {
        isMenuOpen: !prevState.isMenuOpen
      }
    })

  }

  backdropClickHandler = () => {
    this.setState({
      isMenuOpen: false
    })

  }

  changeSkillsList = () => {
    this.setState(prevState => {
      return {
        showHardSkillList: !prevState.showHardSkillList
      }
    })
  }

  pageIdThatIsOpenNow = (linkId) => {
    this.setState({
      pageIdNowIsOpen: linkId,
      isMenuOpen: false
    })

  }

  render() {
    return (
      <Router>
        <div className='App'>
          
            <div className='overlay'>
              <div>
              <Toolbar
                backdropClickHandler={this.backdropClickHandler}
                links={this.state.links}
                pageIdNowIsOpen={this.state.pageIdNowIsOpen}
                isMenuOpen={this.state.isMenuOpen}
                openToggleMenu={this.openToggleMenu}
                pageIdThatIsOpenNow={this.pageIdThatIsOpenNow} />

              <Switch>

                <Route path='/paulzakharov' exact render={() =>
                  <Home
                    showHardSkillList={this.state.showHardSkillList}
                    changeSkillsList={this.changeSkillsList}
                    hardSkills={this.state.hardSkills}
                    softSkills={this.state.softSkills}
                    experience={this.state.experience} />} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
              </Switch>

            </div>
            </div>
        </div>
      </Router>
    )
  }
}

export default App