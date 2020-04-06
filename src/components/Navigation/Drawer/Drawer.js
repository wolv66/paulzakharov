import React from 'react'
import Backdrop from './Backdrop'
import './Drawer.css'
import Links from '../Links/Links'

const Drawer = (props) => {

    const cls = ['drawer']

    if (!props.isMenuOpen) {
        cls.push('opened')
    }


    return (
        <div>
            <div className={cls.join(' ')}>
                <ul>
                    <Links links={props.links}
                               pageIdNowIsOpen={props.pageIdNowIsOpen}
                               pageIdThatIsOpenNow={props.pageIdThatIsOpenNow} />
                </ul>
            </div>
            {props.isMenuOpen ? <Backdrop backdropClickHandler={props.backdropClickHandler} /> : null}
        </div>
    )
}

export default Drawer;
