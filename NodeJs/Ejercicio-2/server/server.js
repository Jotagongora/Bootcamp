require("./config/config");

const mongoose = require("mongoose");

const express = require("express");

const app = express();

const toDoList = require("./routes/toDoList");

const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/todolist", toDoList);

mongoose.connect("mongodb://localhost:27017/toDoList", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", err => console.log("Connection to DB failed:", err));
db.once("open", () => console.log("Connection to DB succesfuly:"));

app.listen(process.env.PORT, () => {
    console.log("Listening on port:", process.env.PORT);
});