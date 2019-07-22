import to from 'await-to-js'
import Axios from 'axios'
import range from 'lodash.range'
import shuffle from 'lodash.shuffle'

const setupNewFullGame = async () => {
  console.log('Creating a new game...')
  const [err, res] = await to(Axios.post('/api/game'))
  if (err) return err

  const game = res.data
  const numbers = shuffle(range(1, 25)).map((x) => x.toString().padStart(2, '0'))
  await Promise.all([
    Axios.post('/api/game/join', {gameID: game.id, playerID: '5cd85783c26513e12f695ce2', colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: '5cd8988c463115ffdbc672b3', colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: '5ce28c5b63ca37c488983f92', colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: '5ce28c7563ca37c488983f93', colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: '5ce28c9663ca37c488983f94', colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: '5ce28cbd63ca37c488983f95', colour: 'e' + numbers.pop()}),
    Axios.post('/api/game/join', {gameID: game.id, playerID: '5ce28cd263ca37c488983f96', colour: 'e' + numbers.pop()}),
  ])
  await Axios.post(`/api/game/${game.id}/start`)
  return await Axios.get(`/api/game/${game.id}`)
}

export default setupNewFullGame
