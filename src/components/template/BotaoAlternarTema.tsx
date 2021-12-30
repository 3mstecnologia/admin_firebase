import { IconeTemaClaro, IconeTemaEscuro } from "../icons/index";
interface BotaoAlternarTemaProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === "dark" ? (
    <div
      onClick={props.alternarTema}
      className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}
    >
      <div
        className={`
                flex items-center justify-center
                bg-white text-yellow-600
                rounded-full
                w-6 h-6

            `}
      >
        {IconeTemaClaro(4)}
      </div>
      <span
        className={`
        hidden lg:flex items-center ml-2
            `}
      >
        Claro
      </span>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}
    >
      <span
        className={`
        hidden lg:flex items-center ml-2 mr-2
        text-white
            `}
      >
        Escuro
      </span>
      <div
        className={`
                flex items-center justify-center
                bg-black text-gray-300
                rounded-full
                w-6 h-6

            `}
      >
        {IconeTemaEscuro(4)}
      </div>
    </div>
  );
}
