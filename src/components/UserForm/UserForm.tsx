import React, {useState} from 'react';
import type {User, UserMutation} from "../../types";
import {uID} from "../../lib/uID";

interface Props {
  onSubmit: (userData: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const defaultFields: UserMutation = {
    name: '',
    email: '',
    isActive: false,
    role: ''
  }
  const [fields, setFields] = useState<UserMutation>({...defaultFields});

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({...fields, id: uID()});
    setFields(() => ({...defaultFields}))
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;

    setFields(prev => (
      {...prev, [name]: value}
    ));
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields(prev => (
      {...prev, isActive: e.target.checked}
    ));
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="border border-2 rounded-3 p-2 col align-self-start sticky-top"
    >
      <h4 className="text-secondary border-bottom mb-4 py-2 text-center">Add a new user</h4>
      <div className="input-group mb-3">
        <label htmlFor="name" className="input-group-text">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={fields.name}
          className="form-control"
          onChange={onChange}
          required
        />
      </div>
      <div className="input-group mb-3">
        <label htmlFor="email" className="input-group-text">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={fields.email}
          className="form-control"
          onChange={onChange}
          required
        />
      </div>
      <div className="input-group mb-3">
        <label htmlFor="role" className="input-group-text">Role</label>
        <select
          id="role"
          name="role"
          value={fields.role}
          className="form-control"
          onChange={onChange}
          required
        >
          <option disabled value="">Choose user's destiny</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-check form-switch mb-3">
        <label htmlFor="is-active" className="form-check-label">Active</label>
        <input
          id="is-active"
          type="checkbox"
          checked={fields.isActive}
          className="form-check-input"
          onChange={onCheckboxChange}
        />
      </div>
      <div className="text-center mt-4 pt-2 border-top">
        <button className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;