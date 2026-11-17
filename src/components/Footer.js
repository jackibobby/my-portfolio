import { site } from "@/data/site";
import { Github, Linkedin, Mail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {site.name}. {site.role}.</p>
        <div className="footer__links">
          <a href={site.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a>
          <a href={site.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href={`mailto:${site.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>
    </footer>
  );
}
