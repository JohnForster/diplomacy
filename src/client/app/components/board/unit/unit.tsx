import {Component, h, Fragment} from 'preact'
import Army from './army/army'
import Fleet from './fleet/fleet'

export interface IUnitProps {
  viewBox: string
  location: {x: number, y: number}
  empire: string
  colour: string
  unitType: 'Army' | 'Fleet'
}

interface IUnitState {

}

export default class Unit extends Component <IUnitProps, IUnitState> {
  render(props: IUnitProps, state: IUnitState) {
    return (
      <Fragment>
        {props.unitType === 'Army' &&
          <Army
            viewBox={props.viewBox}
            location={props.location}
            empire={props.empire}
            colour={props.colour}
          />
        }
        {props.unitType === 'Fleet' &&
          <Fleet
            viewBox={props.viewBox}
            location={props.location}
            empire={props.empire}
            colour={props.colour}
          />
        }
      </Fragment>
    )
  }
}