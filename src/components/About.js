import { about, services } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container split">
        <div>
          <h2>One developer for the whole product</h2>
          {about.map((t, i) => <p key={i} className="lead">{t}</p>)}
        </div>
        <ul className="services">
          {services.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
