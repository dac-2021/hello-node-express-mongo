const express = require("express");
const app = express();
const todoUpsert = require("./todo.upsert");

app.get("/", async (req, res) => {
  try {
    const { task, complete } = req.query;
    todoUpsert.addTodo({ task: task, complete: complete });

    res.json({ message: "Operation Success", opr: true });
  } catch (err) {
    res.json({ message: "Server Side Error!", opr: false });
  }
});

app.post("/", (req, res) => {
  try {
    const { task, complete } = req.query;
    todoUpsert.addTodo({ task: task, complete: complete });

    res.json({ message: "Operation Success using POST", opr: true });
  } catch (err) {
    res.json({ message: "Server Side Error!", opr: false });
  }
});

// T2 Server
app.listen(3000, () => console.log("Server Started"));
