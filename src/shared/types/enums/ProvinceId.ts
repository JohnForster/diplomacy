const ProvinceId = {
  NAT : 'nat',
  NRG : 'nrg',
  BAR : 'bar',
  STP_NC : 'stp/nc',
  STP : 'stp',
  MOS : 'mos',
  SEV : 'sev',
  ARM : 'arm',
  SYR : 'syr',
  EAS : 'eas',
  ION : 'ion',
  TUN : 'tun',
  NAF : 'naf',
  MID : 'mid',
  IRI : 'iri',
  LVP : 'lvp',
  CLY : 'cly',
  EDI : 'edi',
  NTH : 'nth',
  NWY : 'nwy',
  STP_SC : 'stp/sc',
  LVN : 'lvn',
  WAR : 'war',
  UKR : 'ukr',
  BLA : 'bla',
  ANK : 'ank',
  SMY : 'smy',
  AEG : 'aeg',
  GRE : 'gre',
  NAP : 'nap',
  TYS : 'tys',
  WES : 'wes',
  SPA_SC : 'spa/sc',
  SPA : 'spa',
  SPA_NC : 'spa/nc',
  POR : 'por',
  GAS : 'gas',
  BRE : 'bre',
  ENG : 'eng',
  WAL : 'wal',
  YOR : 'yor',
  SKA : 'ska',
  SWE : 'swe',
  FIN : 'fin',
  BOT : 'bot',
  BAL : 'bal',
  PRU : 'pru',
  SIL : 'sil',
  GAL : 'gal',
  RUM : 'rum',
  BUL_EC : 'bul/ec',
  BUL : 'bul',
  CON : 'con',
  BUL_SC : 'bul/sc',
  SER : 'ser',
  ALB : 'alb',
  ADR : 'adr',
  APU : 'apu',
  ROM : 'rom',
  TUS : 'tus',
  GOL : 'gol',
  MAR : 'mar',
  BUR : 'bur',
  PAR : 'par',
  PIC : 'pic',
  LON : 'lon',
  BEL : 'bel',
  HOL : 'hol',
  HEL : 'hel',
  DEN : 'den',
  BER : 'ber',
  MUN : 'mun',
  BOH : 'boh',
  VIE : 'vie',
  BUD : 'bud',
  TRI : 'tri',
  VEN : 'ven',
  PIE : 'pie',
  RUH : 'ruh',
  TYR : 'tyr',
  KIE : 'kie',
} as const
type ProvinceId = (typeof ProvinceId)[keyof typeof ProvinceId]

export default ProvinceId
