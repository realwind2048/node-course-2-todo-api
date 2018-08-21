const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b7ba27fc7436cd962cd3597'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5b7ba27fc7436cd962cd3597').then((todo) => {
  console.log(todo);
});
