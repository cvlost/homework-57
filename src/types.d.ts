export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

export interface UserMutation {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}