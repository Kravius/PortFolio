import "./App.css";
import Education from "./layout/section/Education_exp";

import Projects from "./layout/section/Projects";
import SoftSkills from "./layout/section/SoftSkils";
import TechStack from "./layout/section/TechStack";

function App() {
  return (
    <main className="container">
      <h1>Glib Shemenkov</h1>
      <p>
        <strong>Frontend Developer</strong> based in Poznań, Poland
      </p>
      <div className="contact">
        <div>📞 +48 536 781 489</div>
        <div>✉️ shemenkovglib@gmail.com</div>
        <div>
          🔗{" "}
          <a href="https://github.com/Kravius" target="_blank">
            GitHub
          </a>
        </div>
      </div>

      <section className="section">
        <h3>Summary</h3>
        <p>
          Frontend Developer with a strong foundation in modern web development
          using React, Redux Toolkit, and TypeScript. Completed multiple
          real-world projects as part of an intensive frontend training program.
          Background in IT support with a transition into web development
          through self-education and hands-on practice. Passionate about
          building user-friendly interfaces and learning cutting-edge
          technologies.
        </p>
      </section>
      <TechStack />
      <Projects />

      <section className="section">
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>Ferolit NPP. System Administrator (2012–2013):</strong>{" "}
            Maintained IT infrastructure, customized static web templates.
          </li>
        </ul>
      </section>

      <Education />

      <SoftSkills />
    </main>
  );
}

export default App;
