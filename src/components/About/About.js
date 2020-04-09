import React from 'react'
import './About.css'
import Me from './ME.jpg'

export default function About() {
    return (
        <div className='about-container'>
            <div className='myPhoto'>
                <img src={Me} alt=''/>
            </div>

            <div className='about-box'>
                <div className='about-text'>

                <h1>About Me and my WebSite</h1>
                <p>Hi! My name is Paul and I'm FrontEnd Developer! 
                    I was born in Russia, and 2 years ago my family moved to Canada and now we are enjoing this beautiful country.
                    I started my career 1 year ago as Junior FronEnd Developer in EKit company. 
                    On that moment they were looking for someone who can help them with their ideas and who can learn really fast. And they took me! For the last year 
                    I learned a lot of interesting things such as - React! Yes, I fell in love with this framework (or library) and now everyday I'm enjoing to learn something
                    more about it - Redux, Hooks. Every day I'm trying to upgrade my skills and do something new.
                    I hope you will find my own small website-portfolio and you will hire me!
                    Thank you. </p>
                    </div>

            </div>
        </div>

    )
}
