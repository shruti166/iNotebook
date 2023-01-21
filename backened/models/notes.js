const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("notes", NotesSchema);
