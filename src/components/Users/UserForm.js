import React, { useState } from "react";
import Alert from "../Alert/Alert";

import "./UserForm.css";

const Form = (probs) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 && enteredUsername.trim().length === 0) {
      probs.onAlertHandler("Please entere your age & username");
      return;
    }
    if (enteredAge.trim().length === 0) {
      probs.onAlertHandler("Please entere your age");
      return;
    }
    if (enteredUsername.trim().length === 0) {
      probs.onAlertHandler("Please entere your username");
      return;
    }
    if (enteredAge < 0 || enteredAge > 200) {
      probs.onAlertHandler("Please entere logic age");
      return;
    }
    const User = {
      username: enteredUsername,
      age: enteredAge,
    };
    probs.onAddUser(User);
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={usernameChangeHandler}></input>
      <label htmlFor="age">Age (year)</label>
      <input type="number" id="age" onChange={ageChangeHandler}></input>
      <button>Add User</button>
    </form>
  );
};

export default Form;
