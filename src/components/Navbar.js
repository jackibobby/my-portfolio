"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import ThemeToggle from "./ThemeToggle";
import { Menu, Close } from "./Icons";

const links = [
  { href: "#projects", label: "Apps" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">{site.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
          <span className="brand__name">{site.name}</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn--sm nav__cta" href={waLink(site.whatsapp, "Hi, I saw your portfolio and I'd like to talk.")} target="_blank" rel="noreferrer">
            Hire me
          </a>
        </nav>

        <div className="nav__tools">
          <ThemeToggle />
          <button className="icon-btn nav__burger" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
