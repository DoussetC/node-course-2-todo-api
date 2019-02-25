const express = require('express');
const bodyParser = require('body-parser');


let {
  mongoose
} = require('./db/mongoose');
const {
  Todo
} = require('./models/todo');
const {
  User
} = require('./models/user');
const {
  ObjectID
} = require('mongodb');

const app = express();


// middleware
app.use(bodyParser.json());


app.post('/todos', (req, res) => {

  let todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })

  //  console.log(req.body);

})


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e)
  })
})


// GET /todos/1234
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    console.log('Invalid Id detected before sending request to Mongoose');
    res.status(404).send({})
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    console.log('doc retrieved: ', todo);
    res.status(200).send({
      todo
    })

  }).catch((e) => {
    console.log('an error occured', e.message);
    res.status(400).send({});
  })
})



app.listen(3000, () => {
  console.log('Started on port 3000');
})


module.exports = {
  app
}