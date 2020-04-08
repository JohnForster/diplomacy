const Resolution = {
  OK: 'OK',
  ErrConvoyDislodged: 'ErrConvoyDislodged',
} as const
type Resolution = (typeof Resolution)[keyof typeof Resolution]

export default Resolution