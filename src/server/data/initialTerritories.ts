import ProvinceId from '@shared/types/enums/ProvinceId'
import Nation from '@shared/types/enums/Nation'

const initialTerritories: {[n in Nation]: ProvinceId[]} =  {
  England: ['lon', 'lvp', 'yor', 'cly', 'edi', 'wal'],
  France: ['pic', 'bre', 'par', 'gas', 'bur', 'mar'],
  Italy: ['pie', 'ven', 'rom', 'nap', 'apu', 'tus'],
  Germany: ['ber', 'ruh', 'mun', 'kie', 'sil', 'pru'],
  Austria: ['boh', 'bud', 'tyr', 'gal', 'vie', 'tri'],
  Russia: ['war', 'lvn', 'sev', 'mos', 'ukr', 'stp'],
  Turkey: ['con', 'smy', 'syr', 'ank', 'arm'],
}

export default initialTerritories