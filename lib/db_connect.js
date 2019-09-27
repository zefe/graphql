const { MongoClient } = require('mongodb')

const DB_NAME = 'platzi-cursos'

const mongoURL = `mongodb+srv://dbUserPlatzi:nJ5luvxjeszgHcro@cluster0-9hgw0.mongodb.net/${DB_NAME}`
let connetion

async function connectDB (){
  if(connetion) return connetion
  let  client
  try {
    client = await MongoClient.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }) 
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('could not connect to DB', mongoURL, error)
    process.exit(1)
  }
  return connection
}

module.exports = connectDB