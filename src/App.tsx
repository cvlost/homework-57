import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {UserData} from "./types";

function App() {
  const [users, setUsers] = useState<UserData[]>([]);

  const onSubmit = (userData: UserData) => {
    setUsers(prev => [...prev, userData]);
  };

  return (
    <div className="container py-2">
      <div className="row">
        <UserForm onSubmit={onSubmit}/>
        <Users userList={users}/>
      </div>
    </div>
  );
}

export default App;
