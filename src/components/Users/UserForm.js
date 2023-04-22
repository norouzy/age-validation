import React from "react";

const Form = () =>{
    
    return(
        <form onSubmit="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"></input>
            <label htmlFor="age">Age (year)</label>
            <input type="number" id="age"></input>
            <button></button>
        </form>
    );
}

export default Form;