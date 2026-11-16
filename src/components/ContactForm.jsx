import { useState } from "react";
import { business } from "../data.js";

const topics = [
  "Zapytanie o miód",
  "Zestaw prezentowy",
  "Pyłek / pierzga / świece",
  "Inne",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: topics[0],
    message: "",
  });

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const text = [
      `Dzień dobry, mam pytanie do Pasieki Rodziny Gromińskich.`,
      `Imię: ${form.name}`,
      `Telefon: ${form.phone}`,
      `Temat: ${form.topic}`,
      "",
      form.message,
    ].join("\n");

    const whatsapp = `https://wa.me/48511815461?text=${encodeURIComponent(text)}`;
    window.open(whatsapp, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="section tone-soft" id="formularz" aria-labelledby="formularz-title">
      <div className="wrap form-layout">
        <div className="form-intro">
          <p className="eyebrow">Formularz</p>
          <h2 id="formularz-title">Napisz do nas</h2>
          <p>
            Wypełnij krótki formularz. Po wysłaniu otworzy się WhatsApp
            z gotową wiadomością — możesz też po prostu zadzwonić.
          </p>
          <a className="btn form-call" href={business.phoneHref}>
            Zadzwoń: {business.phone}
          </a>
        </div>

        {sent ? (
          <div className="form-done" role="status">
            <h3>Dziękujemy</h3>
            <p>
              Wiadomość jest gotowa w WhatsApp. Jeśli okno się nie otworzyło,
              zadzwoń na {business.phone} albo napisz na Facebooku.
            </p>
            <button type="button" className="btn" onClick={() => setSent(false)}>
              Wyślij kolejną
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Imię i nazwisko
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={update}
                placeholder="Np. Anna Kowalska"
              />
            </label>

            <label>
              Numer telefonu
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={form.phone}
                onChange={update}
                placeholder="Np. 500 000 000"
              />
            </label>

            <label>
              Temat
              <select name="topic" value={form.topic} onChange={update}>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-full">
              Wiadomość
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={update}
                placeholder="Napisz, czego potrzebujesz — gatunek miodu, zestaw, ilość…"
              />
            </label>

            <div className="form-actions form-full">
              <button className="btn" type="submit">
                Wyślij wiadomość
              </button>
              <p className="form-note">
                Formularz otwiera WhatsApp. Nie zapisujemy danych na stronie.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
