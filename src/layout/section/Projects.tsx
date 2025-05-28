import { PROJECTS } from "../../constants/constants";

const Projects: React.FC = () => {
  return (
    <section className="section">
      <h3>Projects</h3>
      <ul>
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <strong>{project.title}:</strong> {project.description}{" "}
            <a href={project.linkUrl} target="_blank">
              {project.linkText}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
