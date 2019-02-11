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



  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5c5963765cc8b904442ed0b2')
    }, {
      $set: {
        name: 'Charles'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })




  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('5c5b05fccf6ce53f59d22d0d')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log('result back: ', result);
  //   })

  client.close()
});