import React, { useState } from "react";
import NoteContext from "./NoteContext";


export default function NoteState(props) {
    const initialData = [
        {
       title : "shruti",
       note: "My first Note",
       category: "general",
       userId: "as"
    },
    {
        title : "shruti",
        note: "My first Note",
        category: "general",
        userId: "as"
     },
     {
        title : "shruti",
        note: "My first Note",
        category: "general",
        userId: "as"
     }

]

const [notes, setNotes] = useState(initialData);

const addNotes = (title, category, note) => {
    const newnote = {
        "title" : title,
        "category": category,
        "note": note
    }
    setNotes(notes.concat(newnote));
}

  return <NoteContext.Provider value= {{notes, setNotes, addNotes}}>
        {props.children}
    </NoteContext.Provider>
 
}



