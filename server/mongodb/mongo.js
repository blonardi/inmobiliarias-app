const dotenv = require('dotenv')
dotenv.config()

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_DATABASE } = process.env
console.log(MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME)

const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}/?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// const getDB = async () => {
//   try {
//     await client.connect()
//     return client.db('databasename')
//   } catch (err) {
//     console.error(err)
//   }
// }

// const getAll = async (collectionName, query = {}) => {
//   try {

//   } catch (
//     err
//   ) {
//     console.error(err)
//   }
// }

async function run () {
  try {
    // Connect the client to the server(optional starting in v4.7)
    await client.connect()
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)
