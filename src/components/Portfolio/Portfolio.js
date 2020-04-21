import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div className='portfolio-grid-box'>

            <div className='portfolio-box1 boxes'>
                <h3>Here my portfolio projects:</h3>
            </div>

            <div className='portfolio-box2 boxes' >
                <h2 className='portfolio-links'><a href='https://paulzakharovbc.github.io/paulzakharov/'>This portfolio website</a></h2>

            </div>

            <div className='portfolio-box3 boxes'>
                <h2 className='portfolio-links'><a href='https://paulzakharovbc.github.io/Todo-App/'>My Todo App</a></h2>
            </div>

            <div className='portfolio-box4 boxes' >
                <h2 className='portfolio-links'><a href='https://paulzakharovbc.github.io/simple-weather-app/'>Weather App</a></h2>
            </div>

            <div className='portfolio-box5 boxes' >
                <h2> Project 4</h2>
            </div>
        </div>
    )
}
