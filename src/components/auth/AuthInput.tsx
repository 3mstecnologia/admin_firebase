interface AuthInputProps {
  label: string;
  nome: string;
  valor: any;
  tipo: "text" | "password" | "email";
  place: string;
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  valorMudou?: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.naoRenderizarQuando ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}</label>
      <input
        type={props.tipo}
        value={props.valor}
        placeholder={props.place}
        name={props.nome}
        required={props.obrigatorio}
        onChange={(e) => props.valorMudou(e.target.value)}
        className={`
        w-full bg-gray-300 rounded-lg py-2 px-4 mt-2
        border focus:border-blue-500 focus:bg-white
        focus:outline-none
      `}
      />
    </div>
  );
}
