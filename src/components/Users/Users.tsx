import React from 'react';
import {UserData} from "../../types";
import UserItem from "./UserItem";

interface Props {
  userList: UserData[];
}

const Users: React.FC<Props> = ({userList}) => {
  return (
    <div className="col">
      <h4 className="text-center text-secondary pt-3 pb-2 border-bottom mb-4">User List</h4>
      {userList.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;