import to from 'await-to-js'
import Axios from 'axios'

export default async () => {
  const [err, res] = await to(Axios.get('/api/auth'))
  console.log(res)
  if (err) return null
  return res.data.userID as string
}
