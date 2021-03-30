const express = require('express')
const app = express();

const cors = require('cors')
const bodyParser = require('body-parser')

const MongoClient = require('mongodb').MongoClient

const crypto = require("crypto")

app.use(cors())
app.use(bodyParser.json())

function encrypt(text){
    var cipher = crypto.createCipher('aes-256-ctr', 'securepassword')
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text){
    var decipher = crypto.createDecipher('aes-256-ctr', 'securepassword')
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}


MongoClient.connect("mongodb://localhost:27017")
    .then(client => {
        const db = client.db('tartanTrails')
        const gnomesCollection = db.collection("gnomes")
        const usersCollection = db.collection("users")

        app.post('/api/signup', (req, res) => {
            usersCollection.findOne({username: req.body.username})
            .then(result => {
                if(result) {
                    res.status(400)
                    return res.json({status: 400, message: "NO!"})
                }
                usersCollection.insertOne({
                    username: req.body.username,
                    password: encrypt(req.body.password),
                    achievements: {
                        gnome1: false,
                        gnome2: false,
                        gnome3: false
                    }
                }).then(ops => res.json(ops))
            })
        })

        app.post('/api/gnome-collected/:collectedGnome', (req, res) => {
            if (!req.params.collectedGnome || !req.body.username) {
                res.status(400)
                return res.json({status: 400, message: "NO!"})
            }
            usersCollection.findOne({username: req.body.username})
            .then(({username, achievements, password}) => {
                const updatedUser = {
                    achievements: {
                        ...achievements,
                        [req.params.collectedGnome]: true
                    }
                }
                usersCollection.findOneAndUpdate(
                    {username: req.body.username},
                    {$set: updatedUser},
                    {returnOriginal: false}    
                ).then(ops => res.json(ops))
            })
        })

        app.post('/api/signin', (req, res) => {
            usersCollection.findOne({username: req.body.username})
                .then(result => {
                    if(!result || req.body.password !== decrypt(result.password)) {
                        res.status(400)
                        return res.json({status: 400, message: "NO!"})
                    }
                    return res.json({loggedIn: true, user: result})
                })
        })

        app.get('/api/gnomes', (req, res) => {
            gnomesCollection.find()
                .toArray()
                .then(gnomes => res.json(gnomes))
        })
    })

app.listen(3001, () => {
    console.log("Listening on port 3001.")
})