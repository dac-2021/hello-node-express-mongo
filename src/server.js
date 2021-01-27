const express = require("express");
const cors = require("cors");
const app = express();
const todoUpsert = require("./todo.upsert");

// Applying MiddleWare
// READ THE HTTP BODY.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
    const { task, complete } = req.body;
    todoUpsert.addTodo({ task: task, complete: complete });

    res.json({ message: "Operation Success using POST", opr: true });
  } catch (err) {
    res.json({ message: "Server Side Error!", opr: false });
  }
});

// T2 Server
app.listen(4000, () => console.log("Server Started"));
