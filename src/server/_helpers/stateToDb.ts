import { IApiStateJSON, IApiStateDB } from '@shared/types'

// TODO Combine these functions into one, with an  argument for nest levels?
const toMap = <K extends string, T>(
  obj: {[k in K]?: T}
): Map<K, T> => {
  const array = Object.entries(obj) as [K, T][]
  return new Map<K, T>(array)
}

const toNestedMap  = <K extends string, L extends string, T>(
  obj: {[k in K]?: {[l in L]?: T}}
) => {
  const map = new Map<K, Map<L, T>>()
  toMap(obj).forEach((v, k) => map.set(k, toMap(v)))
  return map
}

export  const stateToDb = (state: IApiStateJSON): IApiStateDB => {
  return {
    ...state,
    Units: toMap(state.Units),
    Orders: toNestedMap(state.Orders),
    SupplyCenters: toMap(state.SupplyCenters),
    Dislodgeds: toMap(state.Dislodgeds),
    Dislodgers: toMap(state.Dislodgers),
    Bounces: toNestedMap(state.Bounces),
    Resolutions: toMap(state.Resolutions)
  }
}