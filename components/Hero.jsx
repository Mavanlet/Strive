import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Training Performance einfach erfassen und auswerten</h1>
          <p className="sub">
            Strive ist die App für Trainer. Dokumentiere Leistungen, erkenne Trends
            und treffe bessere Entscheidungen.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href="mailto:hello@getstrive.app?subject=Strive%20Demo"
              rel="noopener"
            >
              Demo anfragen
            </a>
            <a className="btn btn-secondary" href="#funktionen">
              Mehr erfahren
            </a>
          </div>
          <div className="trust">
            <span className="badge">DSGVO‑konform</span>
            <span className="dot">•</span>
            <span className="badge">Für Coaches gebaut</span>
            <span className="dot">•</span>
            <span className="badge">Schnelle Erfassung</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          {/* Platzhalter für Visual / App-Frame */}
        </div>
      </div>
    </section>
  );
}
