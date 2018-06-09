const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log(`Unable to connect MongoDB server, ${err}`);
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5b1ab8e44b0e0e1c28c1dfe1')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) =>{
//   console.log(result);
// });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b1aba783d4fb41ce86e3f8f')
  }, {
    $set: {
      location: "PJ"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
