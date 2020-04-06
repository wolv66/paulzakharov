import React from 'react'
import { Link } from 'react-router-dom'

const Links = (props) => {

    return (
        <div className='toolbar_navigation-items'>
            <ul>
            {props.links.map(item => {
                            return (
                                <li 
                                     key={item.linkId}
                                ><Link to={item.link}
                                className={props.pageIdNowIsOpen === item.linkId ? 'menuLink openedLink' : 'menuLink'}
                                  onClick={() => props.pageIdThatIsOpenNow(item.linkId)}>{item.linkName}</Link></li>
                            )
                        })}
            </ul>
            
        </div>
    )
}

export default Links
