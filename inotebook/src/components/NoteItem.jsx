import React from "react";

export default function NoteItem(props) {
  const { note } = props;
  return (
    <div>
      <div className="col-md-4">
        <div className="card my-3">
          <div className="card-body">
            <h1 className="card-title">{note.title}</h1>
            <p className="card-text"> {note.category}</p>
            
            <i className="fa-solid fa-trash" style ={{margin: "10px"}}></i>
            <i className="fa-solid fa-pen-to-square" style ={{margin: "10px"}}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
