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

const [notes, setNotes] = useState(initialData)

  return <NoteContext.Provider value= {{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
 
}



