const Season = {
  SPRING: 'Spring',
  FALL: 'Fall'
} as const
type Season = (typeof Season)[keyof typeof Season]

export default Season
