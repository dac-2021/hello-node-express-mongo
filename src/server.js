const express = require("express");
const app = express();
const todoUpsert = require("./todo.upsert");

app.get("/", async (req, res) => {
  try {
    // hardcoded insert
    await todoUpsert.insertHardCoded();

    res.json({ message: "Operation Success", opr: true });
  } catch (err) {
    res.json({ message: "Server Side Error!", opr: false });
  }
});

// T2 Server
app.listen(3000, () => console.log("Server Started"));
