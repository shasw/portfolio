import React from 'react'


function Home() {
    return (<div className="content">
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