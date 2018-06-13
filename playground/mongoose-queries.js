const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');

const{User} = require('./../server/models/user');

// var id = '5b1fda89b7802b682338f19a';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid!');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not Found!!');
//   }
//   console.log('Todos', todo);
// }).catch((e) => console.log(e)) ;

var id = '5b1e98ed7038fa1c1fb20800';

if (!ObjectID.isValid(id)) {
  console.log('ID not correct!!');
};

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Invalid User ID!!');
  }
  console.log('User:', user);
}).catch((e) => console.log(e));
