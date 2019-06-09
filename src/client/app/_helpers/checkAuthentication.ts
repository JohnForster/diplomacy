import to from 'await-to-js'
import Axios from 'axios'

export default async () => {
  const [err, res] = await to(Axios.get('/api/auth'))
  console.log(err, res)
  if (err) return false
  if (res) return true
}
