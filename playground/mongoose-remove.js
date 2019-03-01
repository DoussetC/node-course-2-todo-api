const {
  ObjectID
} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose')
const {
  Todo
} = require('./../server/models/todo')
const {
  User
} = require('./../server/models/user');


Todo.remove({}).then((result) => {
  console.log(result);

})


// FindOneAndRemove
// Todo.findOneAndRemove({}).then((doc) => {
//   console.log(doc);
// })


// FindByIdAndRemove
Todo.findByIdAndRemove('5c7909ac6f5226ffdf363df2').then((doc) => {
  console.log(doc);

})