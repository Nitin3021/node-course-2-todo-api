var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Nitin:Heroku123@ds159020.mlab.com:59020/mongo-data' || 'mongodb://localhost:27017/TodoApp');

module.export = {mongoose};
