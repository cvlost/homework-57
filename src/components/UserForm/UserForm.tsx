import React, {useState} from 'react';
import type {UserFields, UserData} from "../../types";
import {ROLES} from "../../types";
import {uID} from "../../lib/uID";

interface Props {
  onSubmit: (userData: UserData) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const defaultFields: UserFields = {
    name: '',
    email: '',
    isActive: false,
    role: 'user'
  }
  const [fields, setFields] = useState<UserFields>({...defaultFields});

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({...fields, id: uID()});
    setFields(() => ({...defaultFields}))
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields(prev => (
      {...prev, [e.target.name]: e.target.value}
    ));
  };

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFields(prev => (
      {...prev, role: e.target.value as typeof ROLES[number]}
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
      className="border border-5 p-2 col"
    >
      <div className="input-group mb-3">
        <label htmlFor="name" className="input-group-text">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={fields.name}
          className="form-control"
          onChange={onInputChange}
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
          onChange={onInputChange}
          required
        />
      </div>
      <div className="input-group mb-3">
        <label htmlFor="role" className="input-group-text">Destiny</label>
        <select
          id="role"
          name="role"
          value={fields.role}
          className="form-control"
          onChange={onSelect}
        >
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
      <div>
        <button className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;