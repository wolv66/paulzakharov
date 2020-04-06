import React from 'react'
import './Home.css'
import HardSkill from './SkillList/hardSkill';
import SoftSkill from './SkillList/softSkill';
import Experience from './Experience/Experience';

const Home = (props) => {
    return (

        <div className='grid-box'>
            <div className='box1'>
                <h1>P </h1>
                <h1>Zakharov</h1>
                <h3>FrontEnd Developer</h3>
            </div>

            <div className='box2'>
                <i className="fas fa-angle-left arrowBtn"
                    onClick={props.changeSkillsList} />
                <div className='flex-cont'>




                    {props.showHardSkillList ? <HardSkill
                        hardSkills={props.hardSkills} /> : <SoftSkill
                            softSkills={props.softSkills} />}


                </div>
                <i className="fas fa-angle-right arrowBtn" onClick={props.changeSkillsList} />

            </div>

            <div className='box3'>
                <h2>Experience</h2>
                <Experience
                    experience={props.experience}
                />


            </div>


        </div>




    )
}

export default Home;