// Pure CSS "screenshots" so every app card looks like a real product, no image files needed.
export default function ProjectMock({ kind, colors, url, title }) {
  const style = { "--c1": colors[0], "--c2": colors[1] };
  return (
    <div className="mock" style={style} aria-hidden="true">
      <div className="mock__bar">
        <i /><i /><i />
        <span>{url}</span>
      </div>
      <div className={`mock__body mock--${kind}`}>
        {kind === "dashboard" && (<>
          <div className="mk-side"><b /><b /><b /><b /></div>
          <div className="mk-main">
            <div className="mk-row3"><em /><em /><em /></div>
            <div className="mk-bars">{[40, 65, 50, 80, 60, 90, 70].map((h, i) => <u key={i} style={{ height: `${h}%` }} />)}</div>
          </div>
        </>)}
        {kind === "site" && (<>
          <div className="mk-hero"><strong>{title}</strong><span /></div>
          <div className="mk-list"><p /><p /><p /></div>
        </>)}
        {kind === "crypto" && (<>
          <svg viewBox="0 0 200 70" className="mk-chart"><path d="M0 55 L25 45 L50 50 L80 28 L110 36 L140 14 L170 22 L200 6" /></svg>
          <div className="mk-list"><p /><p /><p /></div>
        </>)}
        {kind === "store" && (
          <div className="mk-grid4">{[0, 1, 2, 3].map((i) => <div key={i} className={`fab fab${i}`} />)}</div>
        )}
        {kind === "bank" && (<>
          <div className="mk-card"><span>Balance</span><strong>$12,480.00</strong></div>
          <div className="mk-list"><p /><p /><p /></div>
        </>)}
        {kind === "books" && (<>
          <div className="mk-spines">{[70, 90, 60, 85, 75, 95, 65].map((h, i) => <u key={i} style={{ height: `${h}%` }} />)}</div>
          <div className="mk-list"><p /><p /></div>
        </>)}
        {kind === "game" && (
          <div className="mk-tiles">{Array.from({ length: 16 }).map((_, i) => <b key={i} className={[1, 6, 7, 11, 12].includes(i) ? "on" : i === 15 ? "gap" : ""} />)}</div>
        )}
        {kind === "tracker" && (<>
          <div className="mk-ring"><span>86%</span></div>
          <div className="mk-list"><p className="done" /><p className="done" /><p /></div>
        </>)}
      </div>
    </div>
  );
}
