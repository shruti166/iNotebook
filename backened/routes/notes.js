const express = require("express");
const NoteModel = require("../models/Notes");
const { Notes } = require("../models/Notes");
const notesRouter = express.Router();

notesRouter.get("/post", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.send(notes);
  } catch (err) {
    console.log(err);
    req.send("something went wrong");
  }
});

notesRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newNote = new NoteModel(payload);
    await newNote.save();
    res.send({ msg: "New note has been created" });
  } catch (err) {
    console.log(err);
    res.send("Error occured while creating note")
  }
});

notesRouter.patch("/update/:id", async(req, res) => {
    const payload = req.body
    const id = req.params.id;
    const note = await NoteModel.findOne({"_id" : id});
    const userId = note.userId;
    const editorId = req.body.userId;
    console.log(userId + " " + editorId)

    if(userId != editorId){
        res.send("You are not authorised to perform this action")
    } else {
        await NoteModel.findByIdAndUpdate({"_id" : id},payload);
        res.send("note has been updated");
    }
})


notesRouter.delete("/delete/:id", async(req, res) => {
    const id = req.params.body;
    const note = await NoteModel.findOne({"_id" : id});
    const userId = note.userId;
    const editorId = req.body.userId;

    if(userId != editorId) {
        res.send("You are not authorised to perform this action")
    } else {
        await NoteModel.findOneAndDelete({"_id" : id})
    }
})


module.exports = notesRouter ;
