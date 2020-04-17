import React from 'react';
import Gallery from './Gallery';
import Posts from './Posts';
import contentStyles from './Content.module.css';

function Content() {
  return (
    
      <div className={contentStyles.mainContent}>
          <Posts headerPost="About me" message="Hello my name is Mary and I am a web developer. I am a second year student at the Warsaw University of Technology, major management in IT sphere. My current studies help me to combine two essential qualities of a developer. Firstly, it is tightly connected with technologies, programming, moreover as a generation-z person I am truly a social media savvy, fast-learner and on a first-name basis with internet and secondly, I know all the basics of project management, company administration, also I have great communication skills, critical thinking and my mind is flexible enough to learn fast and effectively. I am interested in modern technologies, design, web-pages creation, machine learning, artificial intelligence, marketing analysis and clients' behavior. This social network dedicated to me was written fully on React JS, with grid elements."></Posts>
          <Posts headerPost="My skills" nameMessage="Languages" skill1="Github, HTML5, CSS3" skill2="Java Script, JQuery, AJAX" skill3="Bootstrap, SASS, Wordpress" skill4="Python, Data analytics, SQL" skill5="Polish, Russian, English, French"></Posts>
          <Gallery /> 
      </div>
   
  );
}

export default Content;