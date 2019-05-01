const mongoose = require('mongoose')
const isDev = true
const dbURL = isDev ? 'mongodb://localhost/diplomacy_test' : ''

mongoose.connect(dbURL)
mongoose.connection
  .once('open', () => {
    console.log('Connection Established')
  })
  .on('error', (error: Error) => {
    console.log('Warning: ' + error)
  })

  // const schema = {
  //   id: number,
  //   move: string,
  // }

  // schema.id: Joi.number(2,10)

  // mongoose.use(schema)
