import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
export default function Notes() {
  const note = useContext(NoteContext);
  const { notes, setNotes } = note;

  return (
    <div>
        <AddNote/>
          <h1>Your Notes</h1>

          <div>
            {notes.map((note) => {
              return <NoteItem key = {note.id} note={note} />;
            })}
          </div>
        </div>
      
  );
}
