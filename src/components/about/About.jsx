import React from 'react'
import './about.css'
import ME from '../../assets/mines.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
    return (
      <section id="about">
        <h5>GetTo know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icons" />
                <h5>Experience</h5>
                <small>1+ Years of experience</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icons" />
                <h5>Clients</h5>
                <small>50+ worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icons" />
                <h5>Projects</h5>
                <small>10+ completed</small>
              </article>
            </div>
            <p>Every line of code you write in a language like JavaScript affects. Sometimes, it’s subtle. Other times, it’s not. Your code is part of a vast ecosystem–and everything you do matters</p>
            <a href="tel://+237675890481" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
    );
}
export default About;