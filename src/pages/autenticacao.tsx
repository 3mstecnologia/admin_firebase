import { useState } from "react";
import AuthInput from "./../components/auth/AuthInput";

export default function Autenticacao() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div>
      <h1>Entre na Plataforma</h1>
      <AuthInput
        label="E-mail"
        nome="email"
        tipo="email"
        place="Digite seu e-mail"
        valor={email}
        valorMudou={setEmail}
        obrigatorio={true}
      />
      <AuthInput
        label="Senha"
        nome="senha"
        tipo="password"
        place="Digite sua senha"
        valor={senha}
        valorMudou={setSenha}
        obrigatorio={true}
      />
    </div>
  );
}
