const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost";
const DB_NAME = "todoapp";
const COL_TODO = "todo";

const insertHardCoded = async () => {
  const client = new MongoClient(DB_URL);
  await client.connect();

  const db = client.db(DB_NAME);
  await db.collection(COL_TODO).insert({
    id: 1,
    task: "Chennai",
    complete: false,
  });

  await client.close();
};

const udpateHardCoded = async () => {
  const client = new MongoClient(DB_URL);
  await client.connect();

  const db = client.db(DB_NAME);

  const query = { _id: ObjectId("6010f426ca0fd3098fbb8e24") };
  const uobj = { $set: { task: "Mumbai Meri Jaan" } };
  await db.collection(COL_TODO).update(query, uobj);

  client.close();
};

/**
 * Making things dynamic using Parameter
 * @param {*} task
 */
const addTodo = async (task) => {
  const client = new MongoClient(DB_URL);
  await client.connect();

  const db = client.db(DB_NAME);
  await db.collection(COL_TODO).insert(task);

  await client.close();
};

const updateTodo = async (query, uobj) => {
  const client = new MongoClient(DB_URL);
  await client.connect();

  const db = client.db(DB_NAME);

  await db.collection(COL_TODO).update(query, uobj);

  client.close();
};

module.exports = {
  addTodo: addTodo,
  updateTodo: updateTodo,
  insertHardCoded: insertHardCoded,
};
