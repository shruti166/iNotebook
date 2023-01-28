import React, { useContext } from "react";
import { useState } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function AddNote() {

    const context = useContext(NoteContext);
    const {addNotes} = context;
    const [note, setNote] = useState({title: "", note : "", category: ""});

    const handleClick = (e) => {
        e.preventDefault();
        addNotes(note.title, note.note, note.category)
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <h1>ADD NOTES</h1>
      <div className="container" style={{ width: "50%", margin: "auto" }}>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Title
            </label>
            <input type="text" name = "title" className="form-control" id="inputEmail4" onChange={onChange}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Note
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name = "note"
              onChange={onChange}
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
              name = "category"
              onChange={onChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              UserId
            </label>
            <input
              type=""
              className="form-control"
              id="inputAddress2"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick = {handleClick}>
              Create Note
            </button >
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}
