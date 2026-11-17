"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsApp, Close, Send } from "./Icons";

const quick = [
  "I want to hire you for a project",
  "I need a quote for a website or app",
  "Can I see more of your work?",
  "Just saying hello",
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [ready, setReady] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!open) return;
    setReady(false);
    setTyping(true);
    const t = setTimeout(() => { setTyping(false); setReady(true); }, 900);
    return () => clearTimeout(t);
  }, [open]);

  const go = (msg) => window.open(waLink(site.whatsapp, msg), "_blank", "noopener");

  return (
    <div className="wa">
      {open && (
        <div className="wa__panel" role="dialog" aria-label="Chat on WhatsApp">
          <div className="wa__head">
            <span className="wa__avatar">{site.name[0]}</span>
            <div><strong>{site.name}</strong><small>Replies on WhatsApp</small></div>
            <button className="wa__x" onClick={() => setOpen(false)} aria-label="Close chat"><Close /></button>
          </div>
          <div className="wa__body">
            {typing && <div className="wa__bubble wa__typing"><i /><i /><i /></div>}
            {ready && (<>
              <div className="wa__bubble">Hi 👋 I'm {site.name.split(" ")[0]}. What can I help you with?</div>
              <div className="wa__quick">{quick.map((q) => <button key={q} onClick={() => go(q)}>{q}</button>)}</div>
            </>)}
          </div>
          <form className="wa__form" onSubmit={(e) => { e.preventDefault(); if (text.trim()) { go(text.trim()); setText(""); } }}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" aria-label="Message" />
            <button aria-label="Send on WhatsApp"><Send /></button>
          </form>
        </div>
      )}
      <button className="wa__fab" onClick={() => setOpen(!open)} aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}>
        {open ? <Close /> : <WhatsApp size={28} />}
        {!open && <span className="wa__dot" />}
      </button>
    </div>
  );
}
