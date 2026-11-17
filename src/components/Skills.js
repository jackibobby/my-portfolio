import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section section--tint">
      <div className="container">
        <h2>What I build with</h2>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group} className="skills__group">
              <h3>{g.group}</h3>
              <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
