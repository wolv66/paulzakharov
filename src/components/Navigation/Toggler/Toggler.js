import React from 'react'
import './Toggler.css'

const Toggler = (props) => {

    const clsMenuToggler = ['menu-toggler'];
    const clsBarHalfStart = ['bar half start'];
    const clsBarHalfEnd = ['bar half end']

    if (props.isMenuOpen) {
        clsBarHalfStart.push('open');
        clsBarHalfEnd.push('open')
        clsMenuToggler.push('open')

    }



    return (
        <div className={clsMenuToggler.join(' ')}
        onClick={props.openToggleMenu}>
            <div className={clsBarHalfStart.join(' ')}></div>
            <div className='bar'></div>
            <div className={clsBarHalfEnd.join(' ')}></div>
            
        </div>
    )
}

export default Toggler