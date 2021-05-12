const express = require("express");

const app = express();

const PORT = 3000;

// Primero middlewares

app.use(express.json());

// Segundo endpoints

app.get("/", (req, res) => {
    res.json({
        message: "Ejercicio-1"
    })
});

app.post("/", (req, res) => {
    
});

app.listen(PORT);