import { asset, business } from "../data.js";

export default function Story() {
  return (
    <section className="section tone-cream" id="pasieka" aria-labelledby="pasieka-title">
      <div className="wrap split">
        <div className="prose">
          <p className="eyebrow">O nas</p>
          <h2 id="pasieka-title">Pasieka przy Zgierzu</h2>
          <p>
            Jesteśmy rodzinną pasieką w Wiktorowie. Opiekujemy się pszczołami
            i rozlewamy miód, który zbieramy wokół naszych uli.
          </p>
          <p>
            Na stoisku i w ofercie są miody nektarowe, miody z dodatkami,
            pyłek pszczeli, pierzga oraz świece z wosku pszczelego.
          </p>
          <p className="fine">
            {business.street}, {business.postal}
            <br />
            {business.region}
          </p>
        </div>
        <figure className="shot">
          <img
            src={asset("beekeeper.jpg")}
            alt="Pszczelarz z ramką przy malowanych ulach"
            width="1600"
            height="1200"
            loading="lazy"
          />
          <figcaption>Praca przy ulach w sezonie.</figcaption>
        </figure>
      </div>
    </section>
  );
}
