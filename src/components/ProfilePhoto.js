"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { Camera, Close } from "./Icons";

const KEY = "portfolio-photo";

// Resize to keep the saved image small enough for localStorage
function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const max = 900;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * scale);
      c.height = Math.round(img.height * scale);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = reject;
    img.src = url;
  });
}

export default function ProfilePhoto() {
  const input = useRef(null);
  const [src, setSrc] = useState("/profile.jpg"); // drop your photo at public/profile.jpg to make it permanent
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) { setSrc(saved); setMissing(false); }
    } catch {}
  }, []);

  async function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await toDataUrl(file);
    setSrc(data);
    setMissing(false);
    try { localStorage.setItem(KEY, data); } catch {}
    e.target.value = "";
  }

  function remove() {
    try { localStorage.removeItem(KEY); } catch {}
    setSrc("/profile.jpg");
    setMissing(true);
  }

  const initials = site.name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <figure className="portrait">
      <div className="portrait__frame">
        {!missing ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={`Portrait of ${site.name}`} onError={() => setMissing(true)} />
        ) : (
          <button className="portrait__empty" onClick={() => input.current?.click()}>
            <span className="portrait__initials">{initials}</span>
            <span className="portrait__hint"><Camera /> Add your photo</span>
          </button>
        )}
      </div>

      {!missing && (
        <div className="portrait__actions">
          <button className="chip-btn" onClick={() => input.current?.click()}><Camera /> Change photo</button>
          <button className="chip-btn" onClick={remove} aria-label="Remove photo"><Close /></button>
        </div>
      )}

      <input ref={input} type="file" accept="image/*" hidden onChange={onFile} />
      <figcaption className="portrait__badge"><i /> {site.availability}</figcaption>
    </figure>
  );
}
