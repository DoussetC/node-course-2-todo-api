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


// let id = '5c66cf505a35a508778a35b711';
let id_user = '5c61a7919be81f07ba6cf7e2';

if (!ObjectID.isValid(id_user)) {
  console.log('Invalid user id');

}


// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');

// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos: ', todos);
// }, (e) => {
//   console.log(e);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo: ', todo);
// }, (e) => {
//   console.log(e);
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('todo by id: ', todo);
// }).catch((e) => console.log(e.message))


User.findById(id_user).then((user) => {
  if (!user) {
    return console.log('No user found');

  }
  console.log('user: ', user)

}).catch((e) => console.log(e.message))