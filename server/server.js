const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// save new something
var newTodo = new Todo({
  text: 'Edit this video'
  // completed: false,
  // completedAt: 25
});

// newTodo.save().then((doc) => {
//   console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
//
// User
// email - require, trim, type, min length 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var newUser = new User({
  email: 'realwind2048@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Save user', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unabe to save user', e);
});
