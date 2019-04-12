export default new class Engine {
  private svg: HTMLElement

  private startingTerritories: {[key: string]: string[]} = {
    England: ['London', 'Liverpool', 'Yorkshire', 'Clyde', 'Edinburgh', 'Wales'],
    France: ['Picardy', 'Brest', 'Paris', 'Gascony', 'Burgundy', 'Marseilles'],
    Italy: ['Piedmont', 'Venice', 'Rome', 'Naples', 'Apulia', 'Tuscany'],
    Germany: ['Berlin', 'Ruhr', 'Munich', 'Kiel', 'Silesia', 'Prussia'],
    Austria: ['Bohemia', 'Budapest', 'Tyrolia', 'Galicia', 'Vienna', 'Trieste'],
    Russia: ['Warsaw', 'Livonia', 'Sevastopol', 'Moscow' , 'Ukraine', 'Finland', 'St_Petersburg'],
    Turkey: ['Constantinople', 'Smyrna', 'Syria', 'Ankara', 'Armenia']
  }

  constructor() {

  }

  public run = () => {}

  public setup = (svg: HTMLElement) => {
    this.svg = svg
    const water = Array.from(svg.getElementsByClassName('seaTile') as HTMLCollectionOf<HTMLElement>)
    water.forEach((seaTile) => {
      seaTile.addEventListener('click', (evt) => { console.log(evt) })
      // seaTile.onclick = () => console.log(seaTile.getAttribute('title'))
    })
    for (const country in this.startingTerritories) {
      if (this.startingTerritories.hasOwnProperty(country)) {
        this.startingTerritories[country].forEach((territory) => this.setOwnership(territory, country))
      }
    }

    // this.startingTerritories.England.forEach((territory) => this.setOwnership(territory))
    // this.setOwnership('London', 'England')
    // this.setOwnership('Liverpool', 'England')
    // this.setOwnership('Yorkshire', 'England')
    // this.setOwnership('Clyde', 'England')
    // this.setOwnership('Edinburgh', 'England')
    // this.setOwnership('Wales', 'England')


    console.log(svg.getElementsByClassName('London'))
    svg.getElementsByClassName('London')[0].classList.add('England')
    // london.className +=
    // const svg = svgObject.getElementById('mapSvg')
  }

  private setOwnership = (territory: string, owner: string) => {
    const territoryElements = Array.from(this.svg.getElementsByClassName(territory))
    territoryElements.forEach((terr) => {
      terr.classList.remove('England', 'France', 'Germany', 'Austria', 'Russia', 'Italy', 'Turkey')
      terr.classList.add(owner)
    })
  }
} ()
