import countryData from '@client/assets/countryData';
import { ITag } from '@shared/types';

const checkTag = (territoryName: string, tag: ITag): boolean => {
  const territory = countryData.territories.find(t => t.title === territoryName)
  if (!territory) {
    console.error(`Error checking tags: No territory found '${territoryName}'`)
    return false
  }
  return territory.tags.includes(tag)
}

export default checkTag