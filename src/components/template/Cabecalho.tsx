import Titulo from "./Titulo";
import BotaoAlternarTema from "./BotaoAlternarTema";
import useAppData from "../../data/hook/useAppData";

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const { tema, alternarTema } = useAppData();
  return (
    <div
      className={` flex items-center justify-between flex-
    `}
    >
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end`}>
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
      </div>
    </div>
  );
}
