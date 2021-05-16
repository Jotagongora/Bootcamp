const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let toDoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true
    }
});

toDoSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("ToDo", toDoSchema);