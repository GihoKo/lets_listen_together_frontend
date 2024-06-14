import { JwtPayload } from 'jwt-decode';

export interface GoogleUserData extends JwtPayload {
  email?: string;
  name?: string;
  picture?: string;
}
