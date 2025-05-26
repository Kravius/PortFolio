import { EDUCATION } from "../constants/constants";
// import styles from "./Education.module.css";

const Education: React.FC = () => {
  return (
    <ul>
      {EDUCATION.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong> — {item.degree}, {item.major} (
          {item.startDate} - {item.endDate})
          <br />
          <span className="location">{item.location}</span>
          {item.Certifications && (
            <ul>
              {item.Certifications.map((cert, index) => (
                <li key={index}>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    {cert.name} ({cert.date})
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Education;
