import { createContext, useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import api from "./../../funcoes/api";

type AuthContextData = {
  isAuthenticated: boolean;
  user: UserData;
  signIn: (data: signInData) => Promise<void>;
};
type signInData = {
  cpf: string;
  senha: string;
};
type UserData = {
  username: string;
  categoria: string;
  nome: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserData | null>(null);
  const isAuthenticated = !!user;

  async function signIn({ cpf, senha }: signInData) {
    console.log("signIn");
    console.log(cpf, senha);
    const data = await api.post("/login", {
      cpf: cpf,
      passwordEnviado: senha,
    });
    const token = data.data.token;
    console.log("token", token);
    setCookie(null, "emajtoken", token, {
      maxAge: 60 * 60 * 1, //12 horas
    });
    setUser(user);
    Router.push("/painel");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
