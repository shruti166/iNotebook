import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function Notes() {
  const a = useContext(NoteContext);
  
  return <div>hi {a.state.name}</div>;

}
