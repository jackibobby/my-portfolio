"use client";
import { useState } from "react";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsApp, Mail, Send } from "./Icons";

const topics = ["New project", "Get a quote", "Job offer", "Just saying hi"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", topic: topics[0], message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    let delivered = false;
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      delivered = (await res.json()).delivered;
    } catch {}
    if (!delivered) {
      const text = `Hi, I'm ${form.name}. (${form.topic})\n\n${form.message}`;
      window.open(waLink(site.whatsapp, text), "_blank", "noopener");
    }
    setStatus("sent");
  }

  return (
    <section id="contact" className="section section--tint">
      <div className="container split">
        <div>
          <h2>Let's build your app</h2>
          <p className="lead">Tell me what you need. You'll get a reply on WhatsApp, usually the same day.</p>
          <ul className="contact-list">
            <li><a href={waLink(site.whatsapp, "Hi, I'd like to talk about a project.")} target="_blank" rel="noreferrer"><WhatsApp size={18} /> Chat on WhatsApp</a></li>
            <li><a href={`mailto:${site.email}`}><Mail /> {site.email}</a></li>
          </ul>
        </div>

        <form className="form" onSubmit={submit}>
          <label>Your name
            <input required value={form.name} onChange={set("name")} placeholder="Ada Obi" autoComplete="name" />
          </label>
          <label>What's it about?
            <select value={form.topic} onChange={set("topic")}>{topics.map((t) => <option key={t}>{t}</option>)}</select>
          </label>
          <label>Message
            <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="Describe your app, budget and timeline." />
          </label>
          <button className="btn btn--wa" disabled={status === "sending"}>
            <Send /> {status === "sending" ? "Sending…" : "Send on WhatsApp"}
          </button>
          {status === "sent" && <p className="form__ok" role="status">Message sent. Check the WhatsApp window that opened, or wait for my reply.</p>}
        </form>
      </div>
    </section>
  );
}
