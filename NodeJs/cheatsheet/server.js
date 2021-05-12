const express = require("express");

const app = express();

const port = 3000;

//Antes de los endpoints los middlewares

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Petición GET recibida correctamente"})
});

app.get("/:id", (req, res) => {

    let id = req.params.id;

    res.json({message: `Petición GET con parámentro: ${id}`})
});

app.post("/", (req, res) => {
    let body = req.body;

    if (body.username) {
        res.status(200).json({
            message: `Recibido username ${body.username}`
        });
    } else {
        res.status(400).json({
            ok: false,
            message: "El username es obligatorio"
        });
    }

    
});

app.listen(port);
