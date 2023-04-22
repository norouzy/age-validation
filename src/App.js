import React, { useState } from "react";
import Form from "./components/Users/UserForm";
import UsersList from "./components/Items/UsersList";

const Data = [
  {
    key: 0,
    username: "norozuy",
    age: 23,
  },
];

function App() {
  const [Users, setUsers] = useState(Data);

  const addUserHandler = (user) => {
    setUsers((preUser) => {
      return [user, ...preUser];
    });
  };
  return (
    <div>
      <Form onAddUser={addUserHandler} />
      <UsersList dataList={Users} />
    </div>
  );
}

export default App;
