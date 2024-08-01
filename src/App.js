import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Name</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p> Coming Soon!</p>
          </section>

          <section id="projects">
            <h2>My Projects</h2>
            <p>coming soon!</p>
          </section>
          <section id="contact">
          <h2>Contact Me</h2>
          <p>soon</p>
          </section>
          </main>
      <footer>
        made by unni
      </footer>
      </div>
  );
}

export default App;
