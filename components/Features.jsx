import React from "react";

export default function Features() {
  const items = [
    {
      icon: "📝",
      title: "Leistungserfassung",
      text:
        "Protokolliere Trainingseinheiten in Sekunden – metrisch, subjektiv oder frei."
    },
    {
      icon: "📊",
      title: "Analyse‑Dashboards",
      text:
        "Überblicke Trends und Vergleiche mit klaren Charts für Athleten und Teams."
    },
    // ...weitere Feature-Objekte
  ];

  return (
    <section className="features" id="funktionen">
      <div className="container">
        <h2>Funktionen, die Zeit sparen</h2>
        <p className="section-sub">
          Von der schnellen Erfassung bis zur klaren Auswertung – alles an einem Ort.
        </p>
        <div className="grid features-grid">
          {items.map((f) => (
            <article key={f.title} className="card feature">
              <div className="icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
