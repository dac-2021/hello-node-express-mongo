const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost";
const DB_NAME = "todoapp";
const COL_TODO = "todo";

const readTodo = async () => {
  const client = new MongoClient(DB_URL);
  await client.connect();

  const db = client.db(DB_NAME);
  const list = await db.collection(COL_TODO).find().toArray();

  client.close();

  return list;
};

module.exports = {
  readTodo: readTodo,
};
