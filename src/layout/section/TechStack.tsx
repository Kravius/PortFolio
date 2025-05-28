import { TechSTACK } from "../../constants/constants";

const TechStack: React.FC = () => {
  return (
    <section className="section">
      <h3>Tech Stack</h3>
      <ul>
        {TechSTACK.map((item, index) => (
          <li key={index}>
            {item.category}: {item.items.join(", ")}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
