import React from 'react'

const softSkill = (props) => {
    return (
        <div className='skill-box'>
            <div className='skills'>
                <h1 className='title'>{props.softSkills[0]}</h1>
            </div>
            <ul className='listOfSkills'>
                {props.softSkills.slice(1).map(item => {
                    return (
                        <li key={item.softSkillId}>
                            {item.softSkillDescription}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default softSkill
