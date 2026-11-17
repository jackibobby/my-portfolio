import { process as steps } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <h2>How a project goes</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="steps__n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
