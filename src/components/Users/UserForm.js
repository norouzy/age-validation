import React, { useState } from "react";

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
    const User = {
      username: enteredUsername,
      age: enteredAge,
    };
    probs.onAddUser(User);
  };
  return (
    <form onSubmit={submitHandler} class="">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={usernameChangeHandler}></input>
      <label htmlFor="age">Age (year)</label>
      <input type="number" id="age" onChange={ageChangeHandler}></input>
      <button>Submit</button>
    </form>
  );
};

export default Form;
