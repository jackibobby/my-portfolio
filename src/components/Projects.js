"use client";
import { useEffect, useState } from "react";
import { projects } from "@/data/site";
import ProjectMock from "./ProjectMock";
import { Close, External, Github, Check } from "./Icons";

const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Apps I've built</h2>
          <div className="filters" role="tablist" aria-label="Filter apps">
            {cats.map((c) => (
              <button key={c} role="tab" aria-selected={filter === c} className={filter === c ? "is-on" : ""} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
        </div>

        <div className="cards">
          {list.map((p) => (
            <button key={p.id} className="card" onClick={() => setActive(p)} aria-label={`Open ${p.title} details`}>
              <ProjectMock kind={p.kind} colors={p.colors} url={p.url} title={p.title} />
              <div className="card__text">
                <span className="tag">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.tagline}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="icon-btn modal__close" onClick={() => setActive(null)} aria-label="Close"><Close /></button>
            <ProjectMock kind={active.kind} colors={active.colors} url={active.url} title={active.title} />
            <div className="modal__body">
              <span className="tag">{active.category}</span>
              <h3>{active.title}</h3>
              <p className="muted">{active.description}</p>
              <ul className="ticks">{active.features.map((f) => <li key={f}><Check /> {f}</li>)}</ul>
              <ul className="stack">{active.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              <div className="modal__links">
                {active.live && <a className="btn btn--sm" href={active.live} target="_blank" rel="noreferrer"><External /> Live site</a>}
                {active.code && <a className="btn btn--sm btn--ghost" href={active.code} target="_blank" rel="noreferrer"><Github /> Code</a>}
                {!active.live && !active.code && <span className="muted small">Add a live link in src/data/site.js</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
