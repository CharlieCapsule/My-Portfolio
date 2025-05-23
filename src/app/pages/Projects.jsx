'use client'
import React from "react";
import "../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Projects() {

  const [onClickContainer, setOnClickContainer] = useState(false);
  const handleClick = () => { setOnClickContainer(true) };

  return (
    <section className="mainProjectContainer" id='projects'>
      <h2 className="title">Mes projets</h2>
      <div className="secondContainer">
        <div id="projectContainer" onClick={handleClick}>

          <div className="overlay">
            <FontAwesomeIcon icon={faPlay} className="overlayIcon" />
          </div>
          <div id="projectName">CinéFilm</div>
          <img src="/assets/Cinefilmpic.jpg" id="projectPic" />
          <a id="explainationText">Projet de fin d'études en groupe.</a>
        </div>
        {onClickContainer && (
          <div className="videoOverlay" onClick={() => setOnClickContainer(false)}>
            <video controls autoPlay className="videoPlayer">
              <source src="/assets/Cinéfilmgood.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        )}
        <div id="skillContainer"><div id="skillType">À venir...</div></div>
        <div id="skillContainer"><div id="skillType">À venir...</div></div>
      </div>
      <h1 className="endText">Merci de votre visite !</h1>
    </section>
  );
}
