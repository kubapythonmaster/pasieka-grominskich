import { business } from "../data.js";

export default function Contact() {
  return (
    <section className="section contact tone-cream" id="kontakt" aria-labelledby="kontakt-title">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2 id="kontakt-title">Zadzwoń do nas</h2>
          <p>
            Powiemy, jaki miód jest teraz w słoiku i czy złożymy zestaw
            na prezent. Zamówienia przyjmujemy telefonicznie i przez Facebooka.
          </p>
          <a className="phone" href={business.phoneHref}>
            {business.phone}
          </a>
        </div>
        <div className="stamp">
          <p className="who">{business.name}</p>
          <address>
            {business.street}
            <br />
            {business.postal}
            <br />
            {business.region}
          </address>
          <p className="stamp-links">
            <a href={business.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={business.maps} target="_blank" rel="noreferrer">
              Mapa dojazdu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
