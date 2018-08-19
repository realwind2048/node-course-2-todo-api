// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Database Name
const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db(dbName);
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   text: 'eat dinner'
  // }, {
  //   $set: {text: 'eat breakfast'}
  // }, {
  //   returnOriginal: false
  // }).then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 1));
  // }, (err) => {
  //   console.log('Unable to update', err);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b75ab96e29a5b2a2b3b8379')
  }, {
    $inc: {age: 5}
  }, {
    returnOriginal: false
  }).then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  });


  // client.close();
});
