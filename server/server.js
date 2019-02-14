const express = require('express');
const bodyParser = require('body-parser');


let {
  mongoose
} = require('./db/mongoose');
const {
  Todo
} = require('./db/models/todo');
const {
  User
} = require('./db/models/user');

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




app.listen(3000, () => {
  console.log('Started on port 3000');
})