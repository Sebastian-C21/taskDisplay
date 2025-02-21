const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.set("strictQuery", false);

  const mongoDB = "mongodb+srv://jsebcart:IW6yjgbjMpSr6Ljr@taskcluster.ks3uq.mongodb.net/?retryWrites=true&w=majority&appName=TaskCluster";
  main().catch((err) => console.log(err));
  // Define a schema
  const Schema = mongoose.Schema;

  const taskSchema = new Schema ({
    title: String,
    description: String,
    completed: Boolean
  });

  const Task = mongoose.model('Task', taskSchema);

  const query = Task.find({completed: false});

  async function main() {
    await mongoose.connect(mongoDB);
  }

  console.log(query)
  res.send('respond with a resource');
});

module.exports = router;
