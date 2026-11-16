import { business } from "../data.js";

export default function Contact() {
  return (
    <section className="section contact tone-cream" id="kontakt" aria-labelledby="kontakt-title">
      <div className="wrap">
        <div className="section-head contact-head">
          <p className="eyebrow">Kontakt</p>
          <h2 id="kontakt-title">Porozmawiajmy o miodzie</h2>
          <p>
            Powiemy, jaki miód jest teraz w słoiku i czy złożymy zestaw
            na prezent. Zamówienia przyjmujemy telefonicznie i przez Facebooka.
          </p>
        </div>

        <div className="contact-cards">
          <a className="contact-card" href={business.phoneHref}>
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M6.6 3.8c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.2v2.2c0 .4-.2.8-.6 1-.8.5-1.2 1.4-1 2.3.5 2.2 2.3 4 4.5 4.5.9.2 1.8-.2 2.3-1 .2-.4.6-.6 1-.6h2.2c.5 0 1 .3 1.2.8l1 2.2c.2.5.1 1.1-.3 1.5-1.4 1.4-3.5 2-5.5 1.6C9.8 19.4 4.6 14.2 3.8 8.1c-.4-2 .2-4.1 1.6-5.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <span className="contact-label">Telefon</span>
            <strong className="contact-value">{business.phone}</strong>
            <span className="contact-hint">Zadzwoń w sprawie zamówienia</span>
          </a>

          <a className="contact-card" href={business.maps} target="_blank" rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="contact-label">Adres</span>
            <strong className="contact-value">
              {business.street}
              <br />
              {business.postal}
            </strong>
            <span className="contact-hint">Mapa dojazdu</span>
          </a>

          <a className="contact-card" href={business.facebook} target="_blank" rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M14.5 8.5H16V6h-1.7C12.3 6 11 7.3 11 9.2V11H9v2.5h2V18h2.5v-4.5H16L16.5 11H13.5V9.4c0-.5.3-.9 1-.9z"
                  fill="currentColor"
                />
                <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="contact-label">Facebook</span>
            <strong className="contact-value">Napisz wiadomość</strong>
            <span className="contact-hint">Profil pasieki</span>
          </a>
        </div>
      </div>
    </section>
  );
}
