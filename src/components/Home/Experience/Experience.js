import React from 'react'

const Experience = (props) => {
    return (
        <div className='exp-container'>
            {props.experience.map(item => {
                return (
                    <div className='exp-box'>
                        <h3>{item.company}</h3>
                        <h4>{item.when}</h4>
                        <ul>
                          {item.duties.map(i => {
                              return (
                                  
                                      <li key={i+1}>
                                          {i}
                                      </li>
                                
                              )
                          })}    
                        </ul>
                    </div>

                )
            })}
        </div>
    )
}

export default Experience;
