'use strict'
const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'

const age = parseInt(process.argv[2])

mongo.connect(dbUrl, (err, db) => {
  if (err) throw err
  const collection = db.collection('parrots')
  collection.find({
    age: {'$gt': age}
  }).toArray((err, documents) => {
    if (err) throw err
    console.log(documents)
    db.close()
  })
})


