const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log(`Unable to connect MongoDB server, ${err}`);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID ('5b1b987a3379fabec39db59f')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch Todos ${err}`);
  // });
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count:${count}`);
  // }, (err) => {
  //   console.log(`Unable to fetch Todos ${err}`);
  // });

  db.collection('Users').find({name: 'Nitin Pillai'}).toArray().then((docs) => {
    console.log(`Result:`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Unable to do Query!, ${err}`);
  });

  // db.close();
});
