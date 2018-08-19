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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({'text': 'eat lunch'}).then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b790803f082403344112bf1')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  // client.close();
});
