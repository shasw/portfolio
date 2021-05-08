import React from 'react'


function Home() {
    return (<div className="content">
      <div className="skil">
        <h2>About Me</h2>
        <p>
          Hey, my name is Swati. I am a Front End Engineer. For any Job Opportunities in London Area, please reach out to me on <a href="mailto:hi.swatidev2020@gmail.com" className="email-link">hi.swatidev2020@gmail.com</a>
        </p>
      </div>
      <div className="skil">
        <h2>My Skills</h2>
        <p>HTML,HTML5, CSS, CSS3, CSS Flexbox, CSS Grid, JavaScript, React, Git, Facebook Marketing, Email Marketing, SEO, SEM, Inbound Marketing, Google Adwords. </p>
      </div>
      <div className="skil">
        <h2>HTML</h2>
        <div className="progress-bar">100%</div>
      </div>
      <div className="skil">
        <h2>CSS</h2>
        <div className="progress-bar">100%</div>
      </div>
      <div className="skil">
        <h2>JavaScript</h2>
        <div className="progress-bar-l">70%</div>
      </div>
      <div className="skil">
        <h2>React</h2>
        <div className="progress-bar">90%</div>
      </div>
    </div>
    );
  }

  export default Home;