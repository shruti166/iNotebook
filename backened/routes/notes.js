const express = require('express');
const {Notes} = require("../models/Notes");
const notesRouter = express.Router();

notesRouter.get("/post", async(req, res) => {
    try {
        const notes = await Notes.find();
        res.send(notes);
    } catch(err) {

    }
}) 