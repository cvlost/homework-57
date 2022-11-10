export const ROLES = [
  'user',
  'editor',
  'admin',
] as const;

export interface UserFields {
  name: string;
  email: string;
  isActive: boolean;
  role: typeof ROLES[number];
}

export interface UserData extends UserFields {
  id: string;
}