import { createContext, useState } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  tema: Tema;
  alternarTema: () => void;
}

export const AppContext = createContext<AppContextProps>({
  tema: "dark",
  alternarTema: () => {},
});

export function AppProvider(props) {
  const [tema, setTema] = useState<Tema>("dark");

  function alternarTema() {
    console.log("alternarTema");
    console.log(tema);
    setTema(tema === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
