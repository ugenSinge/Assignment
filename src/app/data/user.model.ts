export interface Users{
  id: number;
  user_name: string;
  email: string;
  password?: string;
  role: string;
  permission_access: string;
}
export const users: Users[] = [
{
  "user_name": "kaka",
  "email": "ugensinge7@gmail.com",
  "password": "hulkisbulk",
  "permission_access": "true",
  "role": "user",
  "id": 2
}
]
