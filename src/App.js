import React, { useState } from "react";
import Form from "./components/Users/UserForm";
import UsersList from "./components/Items/UsersList";
import Alert from "./components/Alert/Alert";
const Data = [
  {
    key: 0,
    username: "norozuy",
    age: 23,
  },
];

function App() {
  const [Users, setUsers] = useState(Data);
  const [isAlertActive, setAlertActive] = useState(false);

  const addUserHandler = (user) => {
    setUsers((preUser) => {
      return [user, ...preUser];
    });
  };

  const alertHandler = (data) => {
    setAlertActive(!isAlertActive);
  };

  return (
    <div className="container">
      <Form onAddUser={addUserHandler} onAlertHandler={alertHandler} />
      <UsersList dataList={Users} />
      <Alert isActive={isAlertActive} onAlertHandler={alertHandler} />
    </div>
  );
}

export default App;
