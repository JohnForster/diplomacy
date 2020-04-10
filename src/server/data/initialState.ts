import { IApiStateJSON } from '@shared/types'

const initialState: IApiStateJSON = {
  'Season': 'Spring',
  'Year': 1901,
  'Type': 'Movement',
  'Units': {
    'ank': {
      'Type': 'Fleet',
      'Nation': 'Turkey'
    },
    'ber': {
      'Type': 'Army',
      'Nation': 'Germany'
    },
    'bre': {
      'Type': 'Fleet',
      'Nation': 'France'
    },
    'bud': {
      'Type': 'Army',
      'Nation': 'Austria'
    },
    'con': {
      'Type': 'Army',
      'Nation': 'Turkey'
    },
    'edi': {
      'Type': 'Fleet',
      'Nation': 'England'
    },
    'kie': {
      'Type': 'Fleet',
      'Nation': 'Germany'
    },
    'lon': {
      'Type': 'Fleet',
      'Nation': 'England'
    },
    'lvp': {
      'Type': 'Army',
      'Nation': 'England'
    },
    'mar': {
      'Type': 'Army',
      'Nation': 'France'
    },
    'mos': {
      'Type': 'Army',
      'Nation': 'Russia'
    },
    'mun': {
      'Type': 'Army',
      'Nation': 'Germany'
    },
    'nap': {
      'Type': 'Fleet',
      'Nation': 'Italy'
    },
    'par': {
      'Type': 'Army',
      'Nation': 'France'
    },
    'rom': {
      'Type': 'Army',
      'Nation': 'Italy'
    },
    'sev': {
      'Type': 'Fleet',
      'Nation': 'Russia'
    },
    'smy': {
      'Type': 'Army',
      'Nation': 'Turkey'
    },
    'stp/sc': {
      'Type': 'Fleet',
      'Nation': 'Russia'
    },
    'tri': {
      'Type': 'Fleet',
      'Nation': 'Austria'
    },
    'ven': {
      'Type': 'Army',
      'Nation': 'Italy'
    },
    'vie': {
      'Type': 'Army',
      'Nation': 'Austria'
    },
    'war': {
      'Type': 'Army',
      'Nation': 'Russia'
    }
  },
  'SupplyCenters': {
    'ank': 'Turkey',
    'ber': 'Germany',
    'bre': 'France',
    'bud': 'Austria',
    'con': 'Turkey',
    'edi': 'England',
    'kie': 'Germany',
    'lon': 'England',
    'lvp': 'England',
    'mar': 'France',
    'mos': 'Russia',
    'mun': 'Germany',
    'nap': 'Italy',
    'par': 'France',
    'rom': 'Italy',
    'sev': 'Russia',
    'smy': 'Turkey',
    'stp': 'Russia',
    'tri': 'Austria',
    'ven': 'Italy',
    'vie': 'Austria',
    'war': 'Russia'
  },
  'Dislodgeds': {},
  'Dislodgers': {},
  'Bounces': {},
  'Resolutions': {},
  'Orders': {
  }
}

export default initialState
