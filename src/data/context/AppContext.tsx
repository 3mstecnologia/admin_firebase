import { createContext } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  tema: Tema;
  alternarTema?: () => void;
}

export const AppContext = createContext<AppContextProps>({
  tema: null,
  alternarTema: null,
});

export function AppProvider(props) {
  function alternarTema() {
    console.log("alternarTema");
  }

  return (
    <AppContext.Provider
      value={{
        tema: "dark",
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
