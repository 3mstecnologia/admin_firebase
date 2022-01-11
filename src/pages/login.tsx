import { useContext, useState } from "react";
import { IconeAlerta } from "../components/icons";
import { AuthProvider } from "../data/context/AuthContext";
import useAuth from "../data/hook/useAuthData";
import AuthInput from "../components/auth/AuthInput";
import { useForm } from "react-hook-form";

export default function Login() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [confirmaSenha, setConfirmasenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { isAuthenticated, user, signIn } = useAuth();
  const { register, handleSubmit } = useForm();

  function exibirErro(msg, tempoEmSegundos = 6) {
    setErro(msg);
    setTimeout(() => {
      setErro(null);
    }, tempoEmSegundos * 1000);
  }

  function submeter({ data }) {
    if (modo === "login") {
      console.log("Ai", { data });
      console.log(cpf, senha);
    } else {
      exibirErro("Cadastro não implementado");
      console.log("cadastro");
    }
  }

  return (
    <div className={`flex  h-screen items-center justify-center`}>
      <div className={` hidden md:block w-1/2 md:w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Login"
          className={`
          h-screen
          w-full
          object-cover
          `}
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1
          className={`
        text-3xl font-bold mb-5 
      `}
        >
          {modo === "login" ? "Entre no Sistema" : "Cadastre-se"}
        </h1>
        {erro ? (
          <div
            className={`
          flex items-center 
          bg-red-400 text-white
            py-3 px-5 rounded-lg 
            my-2
            border-3 border-red-700
        `}
          >
            {IconeAlerta(8)}
            <span className="ml-3 text">{erro}</span>
          </div>
        ) : (
          false
        )}
        <form onSubmit={handleSubmit(submeter)}>
          <AuthInput
            {...register("cpf")}
            label="cpf"
            nome="cpf"
            tipo="text"
            place="Digite seu CPF. Somente números"
            valor={cpf}
            valorMudou={setCpf}
            obrigatorio={true}
          />
          <AuthInput
            {...register("senha")}
            label="Senha"
            nome="senha"
            tipo="password"
            place="Digite sua senha"
            valor={senha}
            valorMudou={setSenha}
            obrigatorio
          />
          <AuthInput
            label="Repita sua Senha"
            nome="senha"
            tipo="password"
            place="Repita sua senha"
            valor={confirmaSenha}
            valorMudou={setConfirmasenha}
            obrigatorio
            naoRenderizarQuando={modo === "login"}
          />
          <button
            type="submit"
            //onClick={submeter}
            className={`
        w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-6
      `}
          >
            {modo === "login" ? "Entrar" : "Cadastre-se"}
          </button>
          <hr className="my-6 border-gray-300 w-full" />
          <button
            type="submit"
            //onClick={submeter}
            className={`
        w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
      `}
          >
            Entrar com Google
          </button>
          {modo === "login" ? (
            <button
              onClick={() => setModo("cadastro")}
              className={`
        w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6
      `}
            >
              Cadastre-se
            </button>
          ) : (
            <button
              onClick={() => setModo("login")}
              className={`
        w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6
      `}
            >
              Voltar para Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
