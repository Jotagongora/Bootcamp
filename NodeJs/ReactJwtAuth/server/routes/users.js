const express = require("express");

const router = express.Router();

const R = require("ramda");

const bcrypt = require("bcrypt");

const User = require("../models/user");
const verifyToken = require("../middlewares/auth");

const middleware1 = (req, res, next) => {
    console.log("Hola desde el middleware1");
    next();
}; 

const middleware2 = (req, res, next) => {
    console.log("Hola desde el middleware2");
    next();
};
// Similar al find de mongo, si el filtro esta vacio devuelve todos.
router.get("/", verifyToken, async (req, res) => {
    console.log("Hola desde dentro del get");
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;

    const count = await User.count();

    User.find({active: true})
    .skip((page - 1) * PAGE_SIZE) // número de documentos que saltará
    .limit(PAGE_SIZE) // número de documentos que devolverá
    .exec((error, users) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            });
        } else {
            res.status(200).json({
                ok: true,
                count,
                page,
                PAGE_SIZE,
                results: users
            });
        }
    })
});

router.get("/:id", (req, res) => {

    let id = req.params.id;

    res.json({message: `Petición GET con parámentro: ${id}`})
});

router.post("/", (req, res) => {
   
    let body = req.body;

    const user = new User({
        username: body.username.toLowerCase(),
        email: body.email.toLowerCase(),
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, savedUser) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            });
        } else {
            res.status(201).json({
                ok: true,
                savedUser
            });
        }
    });

    // if (body.username) {
    //     res.status(200).json({
    //         message: `Recibido username ${body.username}`
    //     });
    // } else {
    //     res.status(400).json({
    //         ok: false,
    //         message: "El username es obligatorio"
    //     });
    // }

    
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = R.pick(["username", "email"], req.body);

    User.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true, context: "query" }, // options
        (error, updatedUser) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                });
            } else {
                res.status(201).json({
                    ok: true,
                    updatedUser
                });
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    // User.findByIdAndRemove(id, (error, removedUser) => {
    //     if (error) {
    //         res.status(400).json({
    //             ok: false,
    //             error
    //         });
    //     } else {
    //         res.status(201).json({
    //             ok: true,
    //             removedUser
    //         });
    //     }
    // })

    User.findByIdAndUpdate(
        id,
        {active: false},
        { new: true, runValidators: true, context: "query" }, // options
        (error, updatedUser) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                });
            } else if (!updatedUser) {
                res.status(400).json({
                    ok: false,
                    error: "User not found"
                });
            } else {
                res.status(200).json({
                    ok: true,
                    updatedUser
                });
            }
        }
    );
});

module.exports = router;