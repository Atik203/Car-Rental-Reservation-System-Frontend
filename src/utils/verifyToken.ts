import { jwtDecode } from "jwt-decode";

export type TVerifyUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export const verifyToken = (token: string): TVerifyUser => {
  return jwtDecode(token);
};
