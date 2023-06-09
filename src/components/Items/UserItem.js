import React from "react";
import "./UserItem.css";

const Items = (probs) => {
  return (
    <li className="item">
      <p>
        {probs.username} ({probs.age} years old)
      </p>
    </li>
  );
};

export default Items;
