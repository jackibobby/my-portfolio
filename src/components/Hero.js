import { site, projects } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { Arrow, WhatsApp } from "./Icons";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  const categories = new Set(projects.map((p) => p.category)).size;
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__role">{site.role}</p>
          <h1>{site.headline}</h1>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__cta">
            <a className="btn" href="#projects">See my apps <Arrow /></a>
            <a className="btn btn--wa" href={waLink(site.whatsapp, "Hi, I saw your portfolio and I'd like to talk about a project.")} target="_blank" rel="noreferrer">
              <WhatsApp size={18} /> Chat on WhatsApp
            </a>
            {site.resumeUrl && <a className="btn btn--ghost" href={site.resumeUrl} download>Download CV</a>}
          </div>

          <dl className="hero__stats">
            <div><dt>Apps built</dt><dd>{projects.length}</dd></div>
            <div><dt>Industries</dt><dd>{categories}</dd></div>
            <div><dt>Based in</dt><dd className="small">{site.location}</dd></div>
          </dl>
        </div>

        <ProfilePhoto />
      </div>
    </section>
  );
}
