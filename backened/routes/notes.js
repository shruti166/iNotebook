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
    const editorId = req.params.userId;

    if(userId != editorId){
        res.send("You are not authorised to perform this action")
    } else {
        await NoteModel.findByIdAndUpdate({"_id" : id},payload);
        res.send({"msg": "note has been updated"}, note)
    }
})


notesRouter.delete("/delete/:id",async (req,res)=>{
    const id=req.params.id 
    const note=await NoteModel.findOne({"_id":id})
    const userID_in_note=note.userID
    const userID_making_req=req.body.userID
    try{
        if(userID_making_req!==userID_in_note){
            res.send({"msg":"You are not authorized"})
        } else {
            await NoteModel.findByIdAndDelete({"_id":id})
            res.send("Deleted the note")
        }
        
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})
module.exports = notesRouter ;
