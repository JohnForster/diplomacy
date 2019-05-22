import Axios from "axios";
import to from "await-to-js";

type Game = {
  game: object,
  turn: object,
}

const setupGame = async () => {
  console.log('Creating a new game...')
  const [err, res] = await to(Axios.post('/api/game'))
  if (err) {
    return err
  }

  const game = res.data
  await Promise.all([
    Axios.post('/api/game/join', {gameID: game._id, playerID: '5cd85783c26513e12f695ce2'}),
    Axios.post('/api/game/join', {gameID: game._id, playerID: '5cd8988c463115ffdbc672b3'}),
    Axios.post('/api/game/join', {gameID: game._id, playerID: '5ce28c5b63ca37c488983f92'}),
    Axios.post('/api/game/join', {gameID: game._id, playerID: '5ce28c7563ca37c488983f93'}),
    Axios.post('/api/game/join', {gameID: game._id, playerID: '5ce28c9663ca37c488983f94'}),
    Axios.post('/api/game/join', {gameID: game._id, playerID: '5ce28cbd63ca37c488983f95'}),
    Axios.post('/api/game/join', {gameID: game._id, playerID: '5ce28cd263ca37c488983f96'}),
  ])
  await Axios.post(`/api/game/${game._id}/start`)
  return await Axios.get(`/api/game/${game._id}`)
}

export default setupGame
