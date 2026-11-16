export function asset(file) {
  return `${import.meta.env.BASE_URL}images/${file}`;
}

export const business = {
  name: "Pasieka Rodziny Gromińskich",
  shortName: "Pasieka Gromińskich",
  phone: "511 815 461",
  phoneHref: "tel:+48511815461",
  street: "Wiktorów 11 D",
  postal: "95-100 Zgierz",
  region: "województwo łódzkie",
  facebook: "https://www.facebook.com/profile.php?id=100083228777230",
  maps: "https://www.google.com/maps/search/?api=1&query=Wiktor%C3%B3w+11D,+95-100+Zgierz",
  lat: 51.934909,
  lng: 19.308904,
};

export const nav = [
  ["pasieka", "Pasieka"],
  ["miody", "Miody"],
  ["produkty", "Produkty"],
  ["galeria", "Galeria"],
  ["kontakt", "Kontakt"],
];

export const honeys = [
  {
    name: "Faceliowy",
    note: "Nektarowy",
    text: "Jasny, delikatny miód z facelii — spokojny smak na co dzień.",
  },
  {
    name: "Akacjowy",
    note: "Nektarowy",
    text: "Łagodny i jasny. Często dłużej pozostaje płynny.",
  },
  {
    name: "Rzepakowy",
    note: "Nektarowy",
    text: "Kremowy, jasny miód wiosenny. Szybko krystalizuje w gładką masę.",
  },
  {
    name: "Lipowy",
    note: "Nektarowy",
    text: "Charakterystyczny aromat lipy i dłuższy finisz.",
  },
  {
    name: "Wielokwiatowy",
    note: "Nektarowy",
    text: "Smak łąki wokół pasieki — każde miodobranie jest trochę inne.",
  },
  {
    name: "Nektarowo-spadziowy",
    note: "Mieszany",
    text: "Ciemniejszy, pełniejszy. Połączenie nektaru i spadzi.",
  },
];

export const blends = [
  { name: "Z cytryną i imbirem", text: "Miód z dodatkiem cytryny i imbiru." },
  { name: "Z maliną", text: "Miód z maliną — słodszy, owocowy charakter." },
  { name: "Z kakao", text: "Miód z kakao — ciepła, deserowa nuta." },
  { name: "Z rokitnikiem", text: "Miód z rokitnikiem — wyrazisty, owocowo-ziołowy." },
];

export const extras = [
  {
    name: "Pyłek pszczeli",
    text: "Suszony w pasiece. Naturalny dodatek do codziennej kuchni.",
    src: "pollen.jpg",
  },
  {
    name: "Pierzga",
    text: "Produkt pszczeli z plastra — gęsty, wyraźny smak.",
    src: "autumn.jpg",
  },
  {
    name: "Świece z wosku",
    text: "Odlane z wosku pszczelego — choinki, reliefy i formy sezonowe.",
    src: "candles.jpg",
  },
];

export const gallery = [
  {
    src: "beekeeper.jpg",
    alt: "Pszczelarz z ramką przy kolorowych ulach w Wiktorowie",
  },
  {
    src: "jars-row.jpg",
    alt: "Rząd słoików miodu Pasieki Rodziny Gromińskich na tle ogrodu",
  },
  {
    src: "facelia.jpg",
    alt: "Słoje miodu faceliowego przy ulach",
  },
  {
    src: "stall-1.jpg",
    alt: "Stoisko pasieki z miodami, świecami i zestawami prezentowymi",
  },
  {
    src: "gifts-1.jpg",
    alt: "Zestawy prezentowe z miodem w kartonach z heksagonalnym okienkiem",
  },
  {
    src: "candles.jpg",
    alt: "Świece z wosku pszczelego z reliefami świątecznymi",
  },
  {
    src: "pollen.jpg",
    alt: "Pyłek pszczeli w słoikach i miseczce",
  },
  {
    src: "autumn.jpg",
    alt: "Miód nektarowo-spadziowy, pierzga i plaster miodu",
  },
];
