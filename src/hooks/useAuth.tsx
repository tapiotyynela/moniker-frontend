import { AxiosResponse } from "axios";
import * as React from "react";
import { useContext, createContext, useMemo, useState } from "react";
import { login, verifyUserToken } from "../api/user";
import { LoginData, User } from "../types/user";

interface AuthContextInterface {
  user: User | null
  logIn: (data: LoginData) => Promise<AxiosResponse>
}

const AuthContext = createContext<AuthContextInterface | null>(null)

export const AuthProvider = ({ children }: any) =>  {
  const [user, setUser] = useState<User | null>(null)

  // const verifyToken = async () => {
  //   const res = await verifyUserToken()
  //   if (res.status === 200) {
  //     // setUser(res)
  //   } else {
  //     // setUser(false)
  //   }
  // }

  const logIn = async (data: LoginData) => {
    const res = await login(data)
    if (res) {
      setUser(res.data.user)
    }
    return res
  }

  return (
    <AuthContext.Provider value={{user, logIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
