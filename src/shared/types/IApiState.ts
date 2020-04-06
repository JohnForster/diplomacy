interface IApiOutgoingState {
  Season: Season,
  Year: number,
  Type: PhaseType,
  Units: {
    [key in Abbreviations]?: {
      Type: UnitType,
      Nation: Nation,
    }
  }
  SupplyCenters: {
    [key in Abbreviations]?: Nation
  },
  // ! Not sure about the next two
  Dislodgeds: { //! Presumably required for retreat phases
    [key in Abbreviations]?: Nation
  },
  // Dislodgers: { //! Not sure why this would be required
  //   [key in keyof Abbreviations]?: Nation
  // },
  Orders: {
    [k in Nation]?: {
      [a in Abbreviations]?: [OrderType, Abbreviations, Abbreviations?]
    }
  }
}

interface IApiIncomingState extends IApiOutgoingState {
  Dislodgers: { //! Not sure why this would be required
    [key in keyof Abbreviations]?: Nation
  },
  Bounces: {},
  Resolutions: {
    [k in Abbreviations]?: string
  }
}

const Season = {
  SPRING: "Spring",
  FALL: "Fall"
} as const
type Season = (typeof Season)[keyof typeof Season]

const PhaseType = {
  MOVEMENT : "Movement",
  RETREAT : "Retreat",
  ADJUSTMENT : "Adjustment",
} as const
type PhaseType = (typeof PhaseType)[keyof typeof PhaseType]

const Nation = {
  ENGLAND : "England",
  FRANCE : "France",
  GERMANY : "Germany",
  AUSTRIA : "Austria",
  TURKEY : "Turkey",
  ITALY : "Italy",
  RUSSIA : "Russia",
} as const
type Nation = (typeof Nation)[keyof typeof Nation]

const OrderType = {
  BUILD : "Build",
  MOVE : "Move",
  MOVEVIACONVOY : "MoveViaConvoy",
  HOLD : "Hold",
  CONVOY : "Convoy",
  SUPPORT : "Support",
  DISBAND : "Disband",
} as const
type OrderType = (typeof OrderType)[keyof typeof OrderType]

const UnitType = {
  FLEET : "Fleet",
  ARMY : "Army",
} as const
type UnitType = (typeof UnitType)[keyof typeof UnitType]

const Resolutions = {
  OK: "OK",
  ErrConvoyDislodged: "ErrConvoyDislodged",
} as const
type Resolutions = (typeof Resolutions)[keyof typeof Resolutions]


const Abbreviations = {
  NAT : "nat",
  NRG : "nrg",
  BAR : "bar",
  STP_NC : "stp/nc",
  STP : "stp",
  MOS : "mos",
  SEV : "sev",
  ARM : "arm",
  SYR : "syr",
  EAS : "eas",
  ION : "ion",
  TUN : "tun",
  NAF : "naf",
  MID : "mid",
  IRI : "iri",
  LVP : "lvp",
  CLY : "cly",
  EDI : "edi",
  NTH : "nth",
  NWY : "nwy",
  STP_SC : "stp/sc",
  LVN : "lvn",
  WAR : "war",
  UKR : "ukr",
  BLA : "bla",
  ANK : "ank",
  SMY : "smy",
  AEG : "aeg",
  GRE : "gre",
  NAP : "nap",
  TYS : "tys",
  WES : "wes",
  SPA_SC : "spa/sc",
  SPA : "spa",
  SPA_NC : "spa/nc",
  POR : "por",
  GAS : "gas",
  BRE : "bre",
  ENG : "eng",
  WAL : "wal",
  YOR : "yor",
  SKA : "ska",
  SWE : "swe",
  FIN : "fin",
  BOT : "bot",
  BAL : "bal",
  PRU : "pru",
  SIL : "sil",
  GAL : "gal",
  RUM : "rum",
  BUL_EC : "bul/ec",
  BUL : "bul",
  CON : "con",
  BUL_SC : "bul/sc",
  SER : "ser",
  ALB : "alb",
  ADR : "adr",
  APU : "apu",
  ROM : "rom",
  TUS : "tus",
  GOL : "gol",
  MAR : "mar",
  BUR : "bur",
  PAR : "par",
  PIC : "pic",
  LON : "lon",
  BEL : "bel",
  HOL : "hol",
  HEL : "hel",
  DEN : "den",
  BER : "ber",
  MUN : "mun",
  BOH : "boh",
  VIE : "vie",
  BUD : "bud",
  TRI : "tri",
  VEN : "ven",
  PIE : "pie",
  RUH : "ruh",
  TYR : "tyr",
  KIE : "kie",
} as const
type Abbreviations = (typeof Abbreviations)[keyof typeof Abbreviations]

const testOutgoing: IApiOutgoingState = {
  "Season": "Spring",
  "Year": 1901,
  "Type": "Movement",
  "Units": {
    "ank": {
      "Type": "Fleet",
      "Nation": "Turkey"
    }
  },
  "SupplyCenters": {
    "ank": "Turkey",
  },
  "Dislodgeds": {},
  // "Dislodgers": {},
  // "Bounces": {},
  // "Resolutions": {},
  "Orders": {
    "England": {
      "lon": ["Move", "eng"],
      "lvp": ["Support", 'edi', 'yor'],
      "edi": ["Move", "yor"],
    },
    "Italy": {
      'nap': ["Move", 'tys'],
    }
  }
}

const testIncoming: IApiIncomingState = {
  "Season": "Spring",
  "Year": 1901,
  "Type": "Retreat",
  "Units": {
    "ank": {
      "Type": "Fleet",
      "Nation": "Turkey"
    },
    "ber": {
      "Type": "Army",
      "Nation": "Germany"
    },
    "bre": {
      "Type": "Fleet",
      "Nation": "France"
    },
    "bud": {
      "Type": "Army",
      "Nation": "Austria"
    },
    "con": {
      "Type": "Army",
      "Nation": "Turkey"
    },
    "eng": {
      "Type": "Fleet",
      "Nation": "England"
    },
    "kie": {
      "Type": "Fleet",
      "Nation": "Germany"
    },
    "lvp": {
      "Type": "Army",
      "Nation": "England"
    },
    "mar": {
      "Type": "Army",
      "Nation": "France"
    },
    "mos": {
      "Type": "Army",
      "Nation": "Russia"
    },
    "mun": {
      "Type": "Army",
      "Nation": "Germany"
    },
    "par": {
      "Type": "Army",
      "Nation": "France"
    },
    "rom": {
      "Type": "Army",
      "Nation": "Italy"
    },
    "sev": {
      "Type": "Fleet",
      "Nation": "Russia"
    },
    "smy": {
      "Type": "Army",
      "Nation": "Turkey"
    },
    "stp/sc": {
      "Type": "Fleet",
      "Nation": "Russia"
    },
    "tri": {
      "Type": "Fleet",
      "Nation": "Austria"
    },
    "tys": {
      "Type": "Fleet",
      "Nation": "Italy"
    },
    "ven": {
      "Type": "Army",
      "Nation": "Italy"
    },
    "vie": {
      "Type": "Army",
      "Nation": "Austria"
    },
    "war": {
      "Type": "Army",
      "Nation": "Russia"
    },
    "yor": {
      "Type": "Fleet",
      "Nation": "England"
    }
  },
  "Orders": {},
  "SupplyCenters": {
    "ank": "Turkey",
    "ber": "Germany",
    "bre": "France",
    "bud": "Austria",
    "con": "Turkey",
    "edi": "England",
    "kie": "Germany",
    "lon": "England",
    "lvp": "England",
    "mar": "France",
    "mos": "Russia",
    "mun": "Germany",
    "nap": "Italy",
    "par": "France",
    "rom": "Italy",
    "sev": "Russia",
    "smy": "Turkey",
    "stp": "Russia",
    "tri": "Austria",
    "ven": "Italy",
    "vie": "Austria",
    "war": "Russia"
  },
  "Dislodgeds": {},
  "Dislodgers": {},
  "Bounces": {},
  "Resolutions": {
    "ank": "OK",
    "ber": "OK",
    "bre": "OK",
    "bud": "OK",
    "con": "OK",
    "edi": "OK",
    "kie": "OK",
    "lon": "OK",
    "lvp": "OK",
    "mar": "OK",
    "mos": "OK",
    "mun": "OK",
    "nap": "OK",
    "par": "OK",
    "rom": "OK",
    "sev": "OK",
    "smy": "OK",
    "stp/sc": "OK",
    "tri": "OK",
    "ven": "OK",
    "vie": "OK",
    "war": "OK"
  }
}