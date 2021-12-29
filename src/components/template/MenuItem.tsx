import Link from "next/link";

interface Menuprops {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function MenuItem(props: Menuprops) {
  function renderizaconteudo() {
    return (
      <a
        className={`
        felx 
        flex-col 
        justify-center 
        items-center
        text-gray-900 dark:text-gray-200
        ${props.className}

      `}
      >
        {props.icone}
        <span
          className={`
        text-xs font-light 
        `}
        >
          {props.texto}
        </span>
      </a>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
        `}
    >
      {props.url ? (
        <Link href={props.url}>{renderizaconteudo()}</Link>
      ) : (
        renderizaconteudo()
      )}
    </li>
  );
}
