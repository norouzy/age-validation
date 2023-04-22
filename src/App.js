import React, { useState } from "react";
import Form from "./components/Users/UserForm";
import Items from "./components/Items/UserItem";

const Data = [];

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
      <Items items={Users} />
    </div>
  );
}

export default App;
