import { EDUCATION } from "../../constants/constants";
import style from "../../styles/Education.module.css";
const Education: React.FC = () => {
  return (
    <section className="section">
      <h3>Education</h3>
      <ul>
        {EDUCATION.map((item) => (
          <li key={item.id}>
            {item.name} — {item.degree}, {item.major} ({item.startDate} -{" "}
            {item.endDate})
            <br />
            <span className="location">{item.location}</span>
            {item.Certifications && (
              <>
                <h3>Certifications</h3>
                <ul
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  {item.Certifications.map((cert, index) => (
                    <li key={index} className={style.certificate}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cert.name} ({cert.date})
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
