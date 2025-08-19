import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label="Strive Startseite">
          Strive
        </a>

        <nav className="nav" aria-label="Hauptnavigation">
          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-list"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menü
          </button>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`} id="nav-list">
            <li>
              <a href="#funktionen">Funktionen</a>
            </li>
            <li>
              <a href="#vorteile">Vorteile</a>
            </li>
            <li>
              <a href="#ablauf">Ablauf</a>
            </li>
            <li>
              <a href="#preise">Preise</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>

        <a
          className="btn btn-primary header-cta"
          href="mailto:hello@getstrive.app?subject=Strive%20Fr%C3%BChzugang"
          rel="noopener"
        >
          Frühzugang
        </a>
      </div>
    </header>
  );
}
