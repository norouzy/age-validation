import React from "react";

const Items = (probs) => {
  {
    console.log(probs.username);
  }
  return (
    <li className="item">
      <p>
        {probs.username} ({probs.age} years old)
      </p>
    </li>
  );
};

export default Items;
