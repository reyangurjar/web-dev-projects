const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config()
app.use(bodyParser.json());
app.use(cors())

const dbName = 'mynodejsdatabase';
const uri = process.env.MONGO_URI
// Connection URL
const client = new MongoClient(uri);
const port = 3000
app.get('/', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const allPasswords = await collection.find({}).toArray();
  res.json(allPasswords)
})

app.post('/', async (req, res) => {
  const newPassword = req.body
  const addPassword =await client.db(dbName).collection('passwords').insertOne(newPassword);
  res.send({success: true, result: addPassword})
  }
)
app.delete('/', async (req, res) => {
  const password = req.body
  const deletePassword = await client.db(dbName).collection('passwords').deleteOne(password);
  res.send({success: true, result: deletePassword})
  }
)




app.listen(port, () => {
  console.log(`Example  app listening on port ${port}`)
})
