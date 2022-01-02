import { React, useState } from "react";
// import { useHistory } from "react-router-dom";

const Userpost = () => {
  const token = localStorage.getItem("token");
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  const api = async() => { 
  const response = await  fetch("https://twi-adp.herokuapp.com/api/userpost/fetchallnotes", {
    method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         "auth-token": token
    },
  }
  )
  const json = await response.json()
    console.log(json)
    setNotes(json)
}
api()
// console.log(token)
  return (
    <div className=" container row my-3">
        {/* <h1><b><i>Twi</i></b> </h1> */}
        <div className=" container mx-2">
        {notes.length ===0&& 'No Notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
            <div className="d-flex align-items-center">
          <h5 className="card-title text-dark" color="black"><b><b><i>{note.Name}</i> -</b></b></h5> 
            </div>
          <p className="card-text text-dark"><b>{note.title}</b></p>
        </div>
      </div>
    </div>
          );
        })}
      </div>
  );
};

export default Userpost;
