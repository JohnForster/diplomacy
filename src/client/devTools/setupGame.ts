import to from 'await-to-js'
import Axios from 'axios'
import range from 'lodash.range'
import shuffle from 'lodash.shuffle'

const setupNewFullGame = async () => {
  console.log('Creating a new game...')
  const [err, res] = await to(Axios.post('/api/game'))
  if (err) return Promise.reject(err)

  const game = res.data
  const numbers = shuffle(range(1, 25)).map((x) => x.toString().padStart(2, '0'))
  const devIDs = ['5cd85783c26513e12f695ce2', '5cd8988c463115ffdbc672b3', '5ce28c5b63ca37c488983f92', '5ce28c7563ca37c488983f93', '5ce28c9663ca37c488983f94', '5ce28cbd63ca37c488983f95', '5ce28cd263ca37c488983f96']
  const prodIDs = ['5e8a6040505fed0021be01eb', '5e8ad95766a29400215ebe2d', '5e8b206400462a0021d55454', '5e8b207600462a0021d55455', '5e8b208d00462a0021d55456', '5e8b20ab00462a0021d55457', '5e8b20ea00462a0021d55458']
  const IDs = process.env.NODE_ENV === 'production' ? prodIDs : devIDs
  await Promise.all([
    Axios.post('/api/game/join', {gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop()}),
  ])
  await Axios.post(`/api/game/${game.id}/start`)
  return Axios.get(`/api/game/${game.id}`)
}

export default setupNewFullGame
