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

  // Delete all charles users
  db.collection('Users').deleteMany({
    name: 'Charles'
  }).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5c586d6b2ba8bb087a37b0e9')
    })
    .then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);

    })


  client.close()
});