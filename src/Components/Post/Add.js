import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Userpost from './Userpost'

const Add = () => {
  // let history = useHistory();
  const [title, setTitle] = useState({ "title": "" });
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://twi-adp.herokuapp.com/api/userpost/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        title: title.title,
      })
    })
  const json = await response.json();
  console.log(json);
  alert("Your post is successfully posted")
  setTitle({ "title": "" });
  }

const onChange = (e) => {
  setTitle({ ...title, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form onSubmit={handleSubmit} className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label"><b>Title</b></label>
          <input
            type="text"
            className="form-control"
            value={title.title}
            onChange={onChange}
            id="title"
            name="title"
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
      <Userpost/>
    </div>
   
  )
}
export default Add
