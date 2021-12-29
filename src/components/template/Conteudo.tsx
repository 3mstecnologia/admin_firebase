import useAppData from "../../data/hook/useAppData";
interface ConteudoProps {
  children?: any;
}

export default function Conteudo(props: ConteudoProps) {
  const dados = useAppData();

  return (
    <div
      className={`
            flex flex-col mt-7`}
    >
      {props.children}
    </div>
  );
}
