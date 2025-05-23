import React from "react"
import '../styles/skills.css'

export default function Skills() {
  return (
    <section className='mainContainer' id='skills'>
      <h2 className="title">Compétences</h2>
      <div className='secondContainer'>
        <div id="skillContainer">
          <div id="skillType">Frontend
          </div>
          <div id="skill">Javascript
          </div>
          <div id="skill">React
          </div>
          <div id="skill">React Native
          </div>
          <div id="skill">Next.js
          </div>
        </div>
        <div id="skillContainer">
          <div id="skillType">Backend
          </div>
          <div id="skill">Node.js
          </div>
          <div id="skill">Express
          </div>
          <div id="skill">RESTful APIs
          </div>
        </div>
        <div id="skillContainer">
          <div id="skillType">Tools
          </div>
          <div id="skill">Git/GitHub
          </div>
          <div id="skill">MongoDB
          </div>
          <div id="skill">Expo
          </div>
          <div id="skill">Jira / Trello
          </div>
        </div>
      </div>
    </section>
  )
}
