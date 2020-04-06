import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div className='portfolio-grid-box'>

            <div className='portfolio-box1 boxes'>
                <h3>Here my portfolio projects:</h3>
            </div>

            <div className='portfolio-box2 boxes' >
                <h2>Project 1</h2>
            </div>

            <div className='portfolio-box3 boxes'>
                <h2> Project 2 </h2>
            </div>

            <div className='portfolio-box4 boxes' >
                <h2>Project 3</h2>
            </div>

            <div className='portfolio-box5 boxes' >
                <h2> Project 4</h2>
            </div>
        </div>
    )
}
