import Titulo from "./Titulo";
import useAppData from "../../data/hook/useAppData";

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const dados = useAppData();

  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <button onClick={dados.alternarTema}></button>
    </div>
  );
}
