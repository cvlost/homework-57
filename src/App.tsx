import React from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="container py-2">
      <div className="row">
        <UserForm/>
        <Users/>
      </div>
    </div>
  );
}

export default App;
