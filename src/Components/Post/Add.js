import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {  
  let history = useHistory();
  const [credentials, setCredentials] = useState({ title: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://twi-adp.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        //    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNDRiYzFhZTc4NzRiZTA3M2JiYWJmIn0sImlhdCI6MTYzMTAwODU5OX0.fFdZmMml4_Wzw_TxMhGoiWiqGriA9JX8naTIoQGpO4o"
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authtoken);
      // var Token = json.authtoken
      // console.log(token)
      // module.import= {"token": Token}
      

      history.push("/");

      // done by adp
      window.location.reload(true);
      alert("Your login was successful")
    } else {
      alert("wrong credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
    return (
       
         <div className="container">
            
       </div>
    )
}

export default Add
