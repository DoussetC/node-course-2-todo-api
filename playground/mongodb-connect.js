// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

let obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .find({
  //     _id: new ObjectID('5c586c0e592b56086945b3bc')
  //   })
  //   .toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('unable to fetch todos', err);

  //   })

  db.collection('Users')
    .find({
      name: 'Charles'
    })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log(err);

    })


  client.close()
});