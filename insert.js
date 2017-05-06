'use strict'
const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'

const document = {
  firstName: process.argv[2],
  lastName: process.argv[3]
}

mongo.connect(dbUrl, (err, db) => {
  if (err) throw err
  const collection = db.collection('docs')
  collection.insert(document, err => {
    if (err) throw err
    console.log(JSON.stringify(document))
    db.close()
  })
})
