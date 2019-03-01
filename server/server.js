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
const port = process.env.PORT || 3000;

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


app.delete('/todos/:id', (req, res) => {
  // get the id
  let id = req.params.id;
  console.log({
    id
  });

  // Validate the id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send({
      text: "Invalid id"
    })
  }

  // remove todo by Id
  // success
  // if no doc, send 404
  // if doc 200
  // error
  // 400 empty body

  Todo.findByIdAndRemove(id).then((todo) => {
    res.status(200).send({
      todo
    })
  }).catch((e) => {
    console.log(e.message);
    res.status(400).send({})
  })
})


app.listen(port, () => {
  console.log(`Started on port ${port}`);
})


module.exports = {
  app
}