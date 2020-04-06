import React from 'react'

const hardSkill = (props) => {
    return (
        <div className='skill-box'>
            <div className='skills'>
                <h1 className='title'>{props.hardSkills[0]}</h1>
            </div>
            <ul className='listOfSkills'>
                {props.hardSkills.slice(1).map(item => {
                    return (
                        <li key={item.hardSkillId}>
                            <span className='typeOfSkill'>{item.typeOfSkill}:</span> &nbsp;
                            {item.HardSkillDescription}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default hardSkill
