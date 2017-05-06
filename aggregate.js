'use strict'
const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'

const size = process.argv[2]

mongo.connect(dbUrl, (err, db) => {
  if (err) throw err
  db.collection('prices').aggregate([
    { $match: { size: size } },
    { $group: { _id: 'averagePrice', averagePrice: { $avg: '$price' } }}
  ], (err, data) => {
    if (err) throw err
    console.log(Number(data[0].averagePrice).toFixed(2))
    db.close()
  })
})
