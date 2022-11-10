export const ROLES = [
  'user',
  'editor',
  'admin',
] as const;

export interface User {
  name: string;
  email: string;
  isActive: boolean;
  role: typeof ROLES[number];
}