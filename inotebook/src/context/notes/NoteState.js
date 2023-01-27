import React from "react";
import NoteContext from "./NoteContext";


export default function NoteState(props) {
    const state = {
       name : "shruti",
       age: "24"
    }

  return <NoteContext.Provider value= {{state}}>
        {props.children}
    </NoteContext.Provider>
 
}



