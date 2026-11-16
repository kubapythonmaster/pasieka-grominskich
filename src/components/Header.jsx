import { useEffect, useState } from "react";
import { asset, business, nav } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("lock", open);
    return () => document.body.classList.remove("lock");
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const sections = nav
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={scrolled || open ? "site-header is-solid" : "site-header"}>
      <div className="header-bar">
        <a className="brand" href="#gora">
          <img src={asset("logo.png")} alt="" width="44" height="44" />
          <span>
            <span className="brand-name">Pasieka Rodziny</span>
            <span className="brand-sub">Gromińskich</span>
          </span>
        </a>

        <nav id="menu" className={open ? "open" : ""} aria-label="Główne">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="btn header-call nav-phone" href={business.phoneHref} onClick={() => setOpen(false)}>
            Zadzwoń
          </a>
        </nav>

        <a className="btn header-call" href={business.phoneHref}>
          Zadzwoń
        </a>

        <button
          className={open ? "burger open" : "burger"}
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((value) => !value)}
        >
          <i />
          <i />
          <span className="sr">Menu</span>
        </button>
      </div>
    </header>
  );
}
