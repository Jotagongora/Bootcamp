const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Petición GET recibida correctamente"})
});

router.get("/:id", (req, res) => {

    let id = req.params.id;

    res.json({message: `Petición GET con parámentro: ${id}`})
});

router.post("/", (req, res) => {
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

module.exports = router;