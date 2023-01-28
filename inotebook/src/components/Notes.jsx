import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
export default function Notes() {
  const note = useContext(NoteContext);
  const { notes, setNote } = note;

  return (
    <div>
      <h1>ADD NOTES</h1>
      <div className="container" style={{ width: "50%", margin: "auto" }}>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Title
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Note
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              UserId
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Create Note
            </button>
          </div>
        </form>
        <div>
          <h1>Your Notes</h1>

          <div>
            {notes.map((note) => {
              return <NoteItem key = {note.id} note={note} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
