interface TituloProps {
  titulo: string;
  subtitulo: string;
}

export default function MenuLateral(props: TituloProps) {
  return (
    <div>
      <h1
        className={`
            font-black text-2xl
            text-gray-900 dark:text-gray-100

                `}
      >
        {props.titulo}
      </h1>
      <h2
        className={`
            font-light
            text-sm
            text-gray-600 dark:text-gray-200
            
                `}
      >
        {props.subtitulo}
      </h2>
    </div>
  );
}
