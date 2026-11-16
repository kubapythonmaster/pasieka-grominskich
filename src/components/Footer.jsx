import { asset, business, nav } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="#gora">
            <img src={asset("logo.png")} alt="" width="52" height="52" />
            <span>
              <strong>Pasieka Rodziny</strong>
              <span>Gromińskich</span>
            </span>
          </a>
          <p>
            Naturalny miód, pyłek, pierzga i świece z wosku z rodzinnej pasieki
            w Wiktorowie koło Zgierza.
          </p>
        </div>

        <div>
          <h3>Na stronie</h3>
          <ul className="footer-links">
            {nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
            <li>
              <a href="#formularz">Formularz</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Kontakt</h3>
          <ul className="footer-links">
            <li>
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <a href={business.maps} target="_blank" rel="noreferrer">
                {business.street}, {business.postal}
              </a>
            </li>
            <li>
              <a href={business.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="#formularz">Napisz wiadomość</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {business.name}
        </p>
        <p>
          Strona stworzona przez{" "}
          <a href="https://nocturagency.pl" target="_blank" rel="noreferrer">
            Noctura
          </a>
        </p>
      </div>
    </footer>
  );
}
