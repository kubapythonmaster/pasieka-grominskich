import { asset, blends, honeys } from "../data.js";

export default function Honeys() {
  return (
    <section className="section tone-soft" id="miody" aria-labelledby="miody-title">
      <div className="wrap honey-board">
        <figure className="honey-photo">
          <img
            src={asset("jars-row.jpg")}
            alt="Słoiki różnych gatunków miodu Pasieki Rodziny Gromińskich"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </figure>

        <div>
          <p className="eyebrow">W słoiku</p>
          <h2 id="miody-title">Miody z pasieki</h2>
          <p className="honey-intro">
            Na etykiecie zaznaczamy gatunek. Dostępność zależy od sezonu
            i tego, co akurat kwitnie wokół uli.
          </p>

          <ul className="varieties">
            {honeys.map((honey) => (
              <li key={honey.name}>
                <h3>{honey.name}</h3>
                <p>
                  <em>{honey.note}.</em> {honey.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap blend-block">
        <div className="blend-copy">
          <h3>Miody z dodatkami</h3>
          <p>
            Obok klasycznych gatunków składamy też słoiki z owocami i ziołami —
            na prezent albo do herbaty.
          </p>
          <ul className="blend-list">
            {blends.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="shot">
          <img
            src={asset("lemon-ginger.jpg")}
            alt="Miód z cytryną i imbirem na drewnianej desce"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
