'use strict'
const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(dbUrl, (err, db) => {
  if (err) throw err
  const users = db.collection('users')
  users.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, err => {
    if (err) throw err
    db.close()
  })
})