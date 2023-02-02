import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as userLogin } from "../api/user";
import { User } from "../types/user";

type AuthContextType = {
  user: User | null;
  logIn: (data: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const userFromStorage = localStorage.getItem("user");
  const [user, setUser] = useState<User | null>(
    userFromStorage ? JSON.parse(userFromStorage) : null
  );
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const logIn = async (data: any) => {
    const res = await userLogin(data);
    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate("/home");
    }
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      logIn,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
