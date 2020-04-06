import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Toggler from '../Toggler/Toggler'
import Drawer from '../Drawer/Drawer'
import Links from '../Links/Links'

const toolbar = (props) => {

    
    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'>
                <Toggler
                    openToggleMenu={props.openToggleMenu}
                    isMenuOpen={props.isMenuOpen}
                />
                <Drawer
                    links={props.links}
                    pageIdNowIsOpen={props.pageIdNowIsOpen}
                    pageIdThatIsOpenNow={props.pageIdThatIsOpenNow}
                    isMenuOpen={props.isMenuOpen} />


                <div className='toolbar_logo'> <Link to='/'> LOGO </Link></div>
                <div className='spacer'></div>  {/*Пустой контейнер который возьмет место между лого и меню */}
                <div className='toolbar_navigation-items'>


                    <ul className='top-menu'>
                        <Links 
                               links={props.links}
                               pageIdNowIsOpen={props.pageIdNowIsOpen}
                               pageIdThatIsOpenNow={props.pageIdThatIsOpenNow} />
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar;
