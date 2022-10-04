import './App.css';

function App() {
  return (
    <div className="App">
     <div class="nav">
    <nav id="navbar">
      <a id="welcomelink" href="#welcome-section">About me</a>
      <a id="projects-link" href="#projects">Projects</a>
      <a id="profile-navlink" href="#profile-section">Profile</a>

    </nav>
  </div>
  <main>
    <section id="welcome-section" class="welcome-section">
      <h1 class="welcome-text">Hey, I am Deanna</h1>
      <p class="welcome-text">a web developer</p>
    </section>
    <section id="projects" class="projects">
      <div class="project-tile">
        <iframe src="https://codepen.io/deannatrace/full/LYzdvbB"></iframe>
        <a href="https://codepen.io/deannatrace/full/LYzdvbB">My Documention Project</a>

      </div>
      <div class="project-tile">
        <iframe src="https://codepen.io/deannatrace/full/zYdRLaY"></iframe>
        <a href="https://codepen.io/deannatrace/full/zYdRLaY">Tribute</a>

      </div>
      <div class="project-tile">
        <iframe src="https://codepen.io/deannatrace/full/QWqGqgV"></iframe>
        <a href="https://codepen.io/deannatrace/full/QWqGqgV">Survey</a>

      </div>
      <div class="project-tile">
        <iframe src="https://codepen.io/deannatrace/full/LYzdejX"></iframe>
        <a href="https://codepen.io/deannatrace/full/LYzdejX">Project Landing Page</a>

      </div>

    </section>
    <section id="profile-section" class="profile">
      <a id="profile-link" target="_blank" href="https://github.com/deanna-og"><img id="profile link 1" class="profile-image" src="https://raw.githubusercontent.com/primer/octicons/main/icons/mark-github-16.svg"></img></a>

      <a id="profile-link" target="_blank" href="https://www.linkedin.com/in/deannagtrace/"><img id="profile link 2" class="profile-image" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"></img></a>

      <a id="profile-link" target="_blank" href="https://codepen.io/deannatrace/"><img id="profile link 3" class="profile-image" src="https://www.svgrepo.com/show/332020/codepen-circle.svg"></img></a>
    </section>
  </main>
    </div>
  );
}

export default App;
