// import {Component, h, Fragment} from 'preact'

// import to from 'await-to-js'
// import Axios from 'axios'

// import Board from '@client/app/components/board/oldBoard'
// import boardData from '@shared/resources/countryData'
// import setupNewFullGame from '@client/devTools/setupGame'
// import { IGameJSON , IGameTurnJSON, IMove, IUnit, OrderType} from '@shared/types'

// import * as Styled from './styled'
// import scrollToElementById from '@client/utils/scrollToElement'
// import OrdersBox from '@client/app/components/ordersBox/oldOrdersBox'

// export interface IGameProps {
//   userID: string,
//   logOut: () => void,
// }

// interface IGameState {
//   game?: IGameJSON
//   turn?: IGameTurnJSON
//   newOrders: IMove[]
//   newOrder: Partial<IMove>
//   newNewOrders: {[key: string]: Partial<IMove>}
//   activeTerritory: string
// }

// export default class Game extends Component <IGameProps, IGameState> {
//   state: IGameState = {
//     activeTerritory: null,
//     turn: null,
//     newOrders: [],
//     newNewOrders: {},
//     newOrder: null,
//   }

//   componentDidMount(){
//     // TODO Move game-loading logic here, based on id prop?

//     window.addEventListener('orientationchange', () => {
//       setTimeout(() => scrollToElementById('anchor'), 500)
//       console.log('screen.orientation.angle', screen.orientation.angle )
//     })
//   }

//   componentDidUpdate (prevProps: IGameProps, prevState: IGameState) {
//     const currentTurnId = this.state.game?.currentTurn
//     const prevTurnId = prevState.game?.currentTurn
//     console.log('prevTurnId, currentTurnId:', prevTurnId, currentTurnId )
//     if (currentTurnId && currentTurnId !== prevTurnId) {
//       this.setState({newOrders: []})
//     }
//   }

//   get currentPlayer() {
//     if (!this.state.turn) return null
//     return this.state.turn.players.find(p => p.playerID === this.props.userID)
//   }

//   render(props: IGameProps, state: IGameState) {
//     let totalOrders = 0
//     if (state.turn) state.turn.players.forEach(p => totalOrders += p.moves.length)
//     return (
//       <Fragment>
//         {/* <h1>{process.env.NODE_ENV !== 'production' ? 'Stop being a perfectionist!' : 'Diplomacy'}</h1> */}
//         <h1>Diplomacy</h1>
//         <Styled.ButtonsContainer>
//           <button onClick={this.setupGame}>Set Up Game</button>
//           <button onClick={this.getLatestGame}>Load Game</button>
//           <button onClick={this.submitOrders}>Submit Orders</button>
//           <button onClick={this.props.logOut}>Log out</button>
//           <button onClick={this.nextTurn}>Next Turn</button><br/>
//         </Styled.ButtonsContainer><br/>
//         {!!state.turn && (
//           <Fragment>
//             <p>{`You are playing as ${this.player.empire}`}</p>
//             <p>{`${state.turn.info.season} ${state.turn.info.year}: ${state.turn.info.phase}. Current Orders: ${totalOrders}`}</p>
//             <OrdersBox
//               playerData={this.player}
//               newNewOrders={state.newNewOrders}
//               setOrder={this.setNewOrder}
//             />
//           </Fragment>
//         )}
//         {/* Can extend in future to have a "showText" boolean for board previews? */}
//         <div id='anchor'> </div>
//         <Board
//           boardData={boardData}
//           activeTerritory={state.activeTerritory}
//           onTileSelect={this.onTileSelect}
//           onMoveSelect={this.onMoveSelect}
//           turnData={state.turn}
//           newOrders={state.newOrders}
//           newOrder={state.newOrder}
//         />
//       </Fragment>
//     )
//   }

//   // ! USE A REDUCER - STATE DEPENDS ON PREVIOUS STATE
//   // TODO ----- Move order creation logic into a reducer -----
//   setNewOrder = (newOrder: Partial<IMove>) => {
//     const existingOrder = this.state.newNewOrders[newOrder.from] || {}
//     const newNewOrders = {
//       ...this.state.newNewOrders,
//       [newOrder.from]: {...existingOrder, ...newOrder}
//     }
//     console.log('newNewOrders:', newNewOrders)
//     this.setState({ newNewOrders })
//   }

//   onTileSelect = (territoryName: string) => {
//     return () => {
//       if (this.state.newOrder && this.state.newOrder.moveType) {
//         const order = {...this.state.newOrder}
//         if (order.moveType === 'support') {
//           if (order.supportFrom) return this.completeMove(territoryName)
//           order.supportFrom = territoryName
//           this.setState({newOrder: order})
//         }
//         if (order.moveType === 'move') this.completeMove(territoryName)
//       }
//       if (!this.state.newOrder && this.playerHasUnitAt(territoryName)) this.beginMove(territoryName)
//     }
//   }

//   onMoveSelect = (orderType: OrderType) => () => {
//     if (orderType === null) return this.setState({newOrder: null, activeTerritory: null})
//     const newOrder = {...this.state.newOrder}
//     newOrder.moveType = orderType

//     this.setState({newOrder}, () => {
//       if (orderType === 'hold') this.completeMove(newOrder.from)
//     })
//   }

//   private beginMove(territoryName: string) {
//     const unit = this.getUnitAt(territoryName)
//     const newOrder: Partial<IMove> = {
//       unit: unit.unitType,
//       from: unit.location,
//     }
//     this.setState({ newOrder, activeTerritory: territoryName })
//   }

//   private completeMove(territoryName: string) {
//     const newOrder: IMove = {
//       unit: this.state.newOrder.unit,
//       from: this.state.newOrder.from,
//       moveType: this.state.newOrder.moveType,
//       supportFrom: this.state.newOrder.supportFrom,
//       to: territoryName,
//       wasSuccessful: null,
//     }
//     const newOrders = this.state.newOrders.filter(o => o.from !== newOrder.from)
//     newOrders.push(newOrder)
//     console.log('newOrder:', newOrder)
//     this.setState({ newOrders, newOrder: null, activeTerritory: null })
//   }
//   // TODO -----------------------------------------------------


//   get player() {
//     if (!this.state.turn) return null
//     return this.state.turn.players.find(p => p.playerID === this.props.userID)
//   }

//   private playerHasUnitAt = (territoryName: string): boolean => {
//     if (!this.state.turn) return false
//     return !!this.player.ownedUnits.find(u => u.location === territoryName)
//   }

//   private getUnitAt = (territoryName: string): IUnit => {
//     // ? What about retreat turns with multiple units in one location?
//     let unit
//     this.state.turn.players.forEach(p => {
//       p.ownedUnits.forEach(u => {
//         if (u.location === territoryName) unit = u
//       })
//     })
//     return unit
//   }

//   // ? Move axios requests into a helper service?
//   private submitOrders = async () => {
//     // await apiService.submitOrders(turnId, moves)
//     await Axios.patch(`/api/turn/${this.state.game.currentTurn}`, {
//       moves: this.state.newOrders,
//       turnID: this.state.game.currentTurn,
//     })
//     console.log('Orders submitted!', this.state.newOrders)
//   }

//   // TODO ------ Move this functionality into a devtools component ------
//   private nextTurn = async () => {
//     const [err, res] = await to(Axios.post(`/api/game/${this.state.game._id}/next`))
//     if (err) console.log(err)
//     if (res) this.getLatestGame()
//   }

//   private setupGame = async () => {
//     const [err, {data: game}] = await to(setupNewFullGame())

//     if (err) {
//       console.log(`Error ocurred when setting up new full game: ${err.message}`)
//       return Promise.reject(err)}
//     const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
//     this.setState({game, turn})
//   }

//   private getLatestGame = async () => {
//     const {data: game} = await Axios.get('/api/game/latest')
//     const {data: turn} = await Axios.get(`/api/turn/${game.currentTurn}`)
//     this.setState({game, turn})
//   }
//   // TODO ----------------------------------------------------------------
// }
