require("./config/config");

const express = require("express");

const app = express();

// Primero middlewares

app.use(express.json());

let users = [];

// Segundo endpoints

app.get("/users", (req, res) => {
    const user = {name: "Jhon", email: "jhon@gmail.com"}
    res.json({
        ok: true,
        results: users
    })
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json({id})
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    const removeUser = users.splice(id, 1);

    res.status(200).json(removeUser)
});

app.post("/users", (req, res) => {
    const body = req.body; // Necesita el app.use midleware;

    if(!body.name) {
        res.status(400).json({ok: false, message: "Name is required"})
    } else {
        users.push(body);
        res.status(201).json({body});
    }
});


app.listen(process.env.PORT, () => {
    console.log("Listening on port :", process.env.PORT);
});

