import { useEffect, useRef, useState } from "react";
import { asset, business } from "../data.js";

const slides = [
  {
    src: asset("beekeeper.jpg"),
    alt: "Pszczelarz z ramką przy ulach w pasiece",
    position: "center 35%",
  },
  {
    src: asset("jars-row.jpg"),
    alt: "Słoiki różnych miodów na tle ogrodu",
    position: "center 55%",
  },
  {
    src: asset("facelia.jpg"),
    alt: "Miód faceliowy przy ulach",
    position: "center 45%",
  },
  {
    src: asset("stall-2.jpg"),
    alt: "Stoisko Pasieki Rodziny Gromińskich",
    position: "center 40%",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useRef(null);
  const count = slides.length;

  useEffect(() => {
    if (paused) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  function go(step) {
    setIndex((current) => (current + step + count) % count);
  }

  return (
    <section
      className="hero"
      id="gora"
      aria-roledescription="pokaz zdjęć"
      aria-labelledby="hero-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
      onPointerDown={(event) => {
        if (event.target.closest("a, button")) return;
        dragX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (dragX.current == null) return;
        const delta = event.clientX - dragX.current;
        dragX.current = null;
        if (delta > 48) go(-1);
        if (delta < -48) go(1);
      }}
    >
      <div className="slides">
        {slides.map((item, itemIndex) => (
          <figure key={item.src} className={itemIndex === index ? "is-on" : ""}>
            <img
              src={item.src}
              alt={itemIndex === index ? item.alt : ""}
              width="1600"
              height="1200"
              style={{ objectPosition: item.position }}
              fetchPriority={itemIndex === 0 ? "high" : "auto"}
            />
          </figure>
        ))}
      </div>
      <div className="hero-shade" />

      <div className="hero-copy">
        <p className="hero-kicker">Wiktorów · Zgierz</p>
        <h1 id="hero-title">
          Miód z rodzinnej
          <br />
          pasieki
        </h1>
        <p className="hero-lead">
          Pasieka Rodziny Gromińskich. Naturalny miód, pyłek, pierzga i świece
          z wosku.
        </p>
        <div className="hero-actions">
          <a className="btn hero-btn" href="#miody">
            Zobacz miody
          </a>
          <a className="hero-call" href={business.phoneHref}>
            {business.phone}
          </a>
        </div>
      </div>

      <div className="hero-controls">
        <button type="button" className="arrow" onClick={() => go(-1)} aria-label="Poprzednie zdjęcie">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <div className="dots" role="tablist" aria-label="Zdjęcia">
          {slides.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              className={itemIndex === index ? "dot on" : "dot"}
              aria-label={`Zdjęcie ${itemIndex + 1}`}
              aria-selected={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
        <button type="button" className="arrow" onClick={() => go(1)} aria-label="Następne zdjęcie">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
