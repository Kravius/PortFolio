import "./App.css";
import Education from "./components/Education_exp";

function App() {
  return (
    <div className="container">
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

      <div className="section">
        <h2>Summary</h2>
        <p>
          Frontend Developer with strong skills in React, Redux Toolkit, and
          TypeScript. Experienced in building responsive, scalable web apps.
          Passionate about UI/UX and continuous learning. Previously worked in
          IT support with real-world exposure to CSS and layout fixes.
        </p>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>eCommerce-App:</strong> Online store.{" "}
            <a href="https://github.com/Kravius/eCommerce-App" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <strong>Postman:</strong> Rest client.{" "}
            <a
              href="https://github.com/Kravius/rest-client-app"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <strong>Puzzle Game:</strong> Interactive game with JS and CSS.{" "}
            <a href="https://github.com/Kravius/Puzzle" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <strong>Library App:</strong> Modular JS book app.{" "}
            <a
              href="https://kravius.github.io/Library-school/library/"
              target="_blank"
            >
              Live Demo
            </a>
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Freelance Frontend Developer (2013):</strong> Styled local
            business site using custom CSS, implemented responsive fixes.
          </li>
          <li>
            <strong>System Administrator (2012–2013):</strong> Maintained IT
            infrastructure, customized static web templates.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Education & Certifications</h2>
        {<Education />}
      </div>



      <div className="section">
        <h2>Soft Skills</h2>
        <p>
          Teamwork • Time Management • Critical Thinking • Communication •
          Leadership • Self-learning
        </p>
      </div>
    </div>
  );
}

export default App;
