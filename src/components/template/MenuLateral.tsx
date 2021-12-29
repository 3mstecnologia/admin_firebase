import MenuItem from "./MenuItem";
import { IconeHome, IconeSair, IconeAjustes } from "../icons/index";
import Logo from "./Logo";
interface MenuLateral {
  children?: any;
}

export default function MenuLateral(props: MenuLateral) {
  return (
    <aside
      className={`
      flex flex-col text-gray-200
      dark: bg-gray-900 
    `}
    >
      <div
        className={`
        flex felx-col justify-center items-center 
          bg-gradient-to-r from-indigo-600 to-blue-800
          h-20 w-20
          
          `}
      >
        <Logo />
      </div>
      <ul
        className={`
        flex-grow
    
    `}
      >
        <MenuItem url="/" texto="Inicio" icone={IconeHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
      </ul>
      <ul>
        <MenuItem
          className={`text-red-600 dark:text-red-400
           hover:bg-red-600 dark:hover:bg-red-400
         `}
          texto="Sair"
          icone={IconeSair}
          onClick={() => {
            console.log("Sair");
          }}
        />
      </ul>
    </aside>
  );
}
