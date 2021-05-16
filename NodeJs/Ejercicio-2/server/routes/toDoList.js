const express = require("express");

const router = express.Router();

const ToDo = require("../models/toDo");

router.get("/", (req, res) => {
    ToDo.find({active: true}).exec((error, toDoList) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            });
        } else {
            res.status(200).json({
                ok: true,
                toDoList
            });
        }
    })
});

router.post("/", (req, res) => {

    let body = req.body;

    const toDo = new ToDo({
        title: body.title
    });

    toDo.save((error, savedToDo) => {
        if (error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, savedToDo});
        }
    });


});

router.put("/:id", (req, res) => {
    const id = req.params.id;

    ToDo.findByIdAndUpdate(
        id,
        {completed: true},
        {new: true, runValidators: true, context: "query"},
        (error, updateTodo) => {
            if (error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updateTodo});
            }
        }
    )
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    ToDo.findByIdAndUpdate(
        id,
        {active: false},
        { new: true, runValidators: true, context: "query" },
        (error, updatedTodo) => {
            if (error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedTodo});
            }
        }
    )
});

module.exports = router;