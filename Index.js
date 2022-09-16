const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

// mongodb uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dvlqtdb.mongodb.net/?retryWrites=true&w=majority`;

/* const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

async function run(){
  try{

  }
  finally{

  }
}

run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello from Laptop Store.')
})

app.listen(port, () => {
  console.log(`Laptop Store app listening on port ${port}`)
})