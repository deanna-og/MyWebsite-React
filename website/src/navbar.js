import "./navbar.css";
export function Navbar() {
  return (
    <div class="nav">
      <nav id="navbar">
        <a id="welcomelink" href="#welcome-section">
          About me
        </a>
        <a id="projects-link" href="#projects">
          Projects
        </a>
        <a id="profile-navlink" href="#profile-section">
          Profile
        </a>
      </nav>
    </div>
  );
}
