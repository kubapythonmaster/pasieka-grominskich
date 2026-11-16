import { asset, business, extras } from "../data.js";

export default function Products() {
  return (
    <section className="section tone-cream" id="produkty" aria-labelledby="produkty-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Poza miodem</p>
          <h2 id="produkty-title">Produkty i zestawy</h2>
          <p>
            Pyłek, pierzga, świece z wosku i pudełka prezentowe ze słoikami.
            Zapytaj telefonicznie, co jest aktualnie dostępne.
          </p>
        </div>

        <div className="product-grid">
          {extras.map((item) => (
            <article key={item.name} className="product-card">
              <img
                src={asset(item.src)}
                alt={item.name}
                width="1200"
                height="900"
                loading="lazy"
              />
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="gift-band">
          <figure>
            <img
              src={asset("gifts-2.jpg")}
              alt="Zestawy prezentowe z miodem i świecą z wosku"
              width="1600"
              height="1200"
              loading="lazy"
            />
          </figure>
          <div>
            <h3>Zestawy na prezent</h3>
            <p>
              Słoiki pakujemy w karton z heksagonalnym okienkiem, dokładamy
              łyżeczkę do miodu albo świecę z wosku i wstążkę.
            </p>
            <a className="btn" href={business.phoneHref}>
              Zapytaj o zestaw
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
