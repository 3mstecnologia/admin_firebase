interface AuthInputProps {
  label: string;
  nome: string;
  valor: any;
  tipo: "text" | "password" | "email";
  place: string;
  obrigatorio?: boolean;
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        className={`flex flex-col`}
        type={props.tipo}
        value={props.valor}
        placeholder={props.place}
        name={props.nome}
        required={props.obrigatorio}
        onChange={(e) => props.valorMudou(e.target.value)}
      />
    </div>
  );
}
