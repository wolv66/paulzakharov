import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1>So, if you have any questions, or you want to hire me - just mail me!</h1>
            <div className='icon-container'>
                <a href="mailto:paulzakharovbc@gmail.com"><i className="contactIcon fas fa-mail-bulk"></i></a>
                <a href="https://www.linkedin.com/in/paul-zak-29b06519a"><i className="contactIcon fab fa-linkedin"></i> </a>
                <a href='https://github.com/wolv66'><i className="contactIcon fab fa-github-square"></i></a>
                <a href='https://www.facebook.com/people/Paul-Zakharov/100004351425520'><i className="contactIcon fab fa-facebook-square
                "></i></a>

            </div>
        </div>
    )
}
