import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onSubmit = (userData: User) => {
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
