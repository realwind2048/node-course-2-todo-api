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
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b790f41c7436cd962cd159d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unnable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unnable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Peter'}).toArray().then((docs) => {
    // console.log(`Users count: ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unnable to fetch todos', err);
  });
  // client.close();
});
