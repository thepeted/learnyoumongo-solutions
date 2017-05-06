'use strict'
const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/' + process.argv[2]

const collection = process.argv[3]
const id = process.argv[4]

mongo.connect(dbUrl, (err, db) => {
  if (err) throw err
  db.collection(collection).remove({ _id: id }, err => {
    if (err) throw err
    db.close()
  })
})