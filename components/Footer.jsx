import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">Strive</div>
        <div className="footer-meta">
          © <span>{year}</span> Strive. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
