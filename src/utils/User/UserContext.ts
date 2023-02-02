import { createContext } from 'react';

interface AuthContext {
  user: any;
  setUser: any;
}

export const UserContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});