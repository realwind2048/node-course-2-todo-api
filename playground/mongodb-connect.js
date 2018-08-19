// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

// Database Name
const dbName = 'TodoApp';

// Object Destructuring
var user = {name: 'peter', age: 25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db(dbName);
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Peter',
  //   age: 20,
  //   location: 'Fantastic place'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id);
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
