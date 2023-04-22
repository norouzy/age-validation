import React from "react";
import "./Alert.css";
const Alert = (probs) => {
  if (probs.isActive) {
    return (
      <div className="alert-container">
        <div className="overlay" onClick={probs.onAlertHandler}></div>
        <div className="Alert">
          <h2>Invalid Input</h2>
          <p>{probs.alertMessage}</p>
          <button onClick={probs.onAlertHandler}>Okay</button>
        </div>
      </div>
    );
  } else {
    return;
  }
};
export default Alert;
