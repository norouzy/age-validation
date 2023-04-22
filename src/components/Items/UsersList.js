import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";
const UsersList = (probs) => {
  return (
    <ul className="list">
      {probs.dataList.map((item, index) => (
        <UserItem key={index} username={item.username} age={item.age} />
      ))}
    </ul>
  );
};

export default UsersList;
