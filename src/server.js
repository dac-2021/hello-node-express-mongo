const express = require("express");
const app = express();
const todoUpsert = require("./todo.upsert");

app.get("/", async (req, res) => {
  // hardcoded insert
  await todoUpsert.insertHardCoded();

  res.send("hello World");
});

// T2 Server
app.listen(3000, () => console.log("Server Started"));
