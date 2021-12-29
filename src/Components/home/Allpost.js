import {React, useState} from 'react';

function Allpost() {
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);
    const apiGet = () => {
        fetch("https://twi-adp.herokuapp.com/api/allpost/fetchall")
          .then((response) => response.json())
          .then((json) => {
              setNotes(json)
            // console.log(json);
          });
      };
        apiGet()
      
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
    )
}

export default Allpost
