import React from 'react';
import {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = (props) => {
  let statusClasses = ['border', 'border-2', 'rounded-circle'];
  let tagClasses = ['px-2', 'rounded-3', 'ms-auto'];
  const statusStyles: React.CSSProperties = {
    width: '1.5em',
    height: '1.5em',
    display: 'inline-block',
  };

  if (props.user.isActive) statusClasses.push('bg-success');

  if (props.user.role === 'admin') tagClasses.push('text-bg-danger');
  else if (props.user.role === 'editor') tagClasses.push('text-bg-primary');
  else tagClasses.push('text-bg-secondary');

  return (
    <div className="rounded-3 border mb-2 p-2 d-flex flex-wrap align-items-center justify-content-between">
      <span style={statusStyles} className={statusClasses.join(' ')}></span>
      <span className="p-2">
        {props.user.name}
      </span>
      <span className={tagClasses.join(' ')}>{props.user.role}</span>
      <div className="w-100 text-center font-monospace text-secondary border-top mt-2 pt-2">
        <span className="pe-2">e-mail:</span>
        <span>{props.user.email}</span>
      </div>
    </div>
  );
};

export default UserItem;