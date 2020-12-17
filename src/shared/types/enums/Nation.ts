const Nation = {
  ENGLAND: "England",
  FRANCE: "France",
  GERMANY: "Germany",
  AUSTRIA: "Austria",
  TURKEY: "Turkey",
  ITALY: "Italy",
  RUSSIA: "Russia",
} as const;
type Nation = typeof Nation[keyof typeof Nation];

export default Nation;
