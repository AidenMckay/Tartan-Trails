const express = require('express')
const app = express();

const cors = require('cors')
const bodyParser = require('body-parser')

const MongoClient = require('mongodb').MongoClient

app.use(cors())
app.use(bodyParser.json())


MongoClient.connect("mongodb://localhost:27017")
    .then(client => {
        const db = client.db('tartanTrails')
        const gnomesCollection = db.collection("gnomes")

        app.get('/api/gnomes', (req, res) => {
            gnomesCollection.find()
                .toArray()
                .then(gnomes => res.json(gnomes))
        })
    })

app.listen(3001, () => {
    console.log("Listening on port 3001.")
})