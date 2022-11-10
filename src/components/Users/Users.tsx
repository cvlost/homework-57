import React from 'react';
import {UserData} from "../../types";
import UserItem from "./UserItem";

interface Props {
  userList: UserData[];
}

const Users: React.FC<Props> = ({userList}) => {
  return (
    <div className="col">
      {userList.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;