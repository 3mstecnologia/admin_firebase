import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Ajustes() {
  const { tema, alternarTema } = useAppData();

  return (
    <Layout titulo="Ajustes" subtitulo="Ajustes do Sistema">
      <h3>Pagina de Ajustes</h3>
      <h1>Tema = {tema}</h1>
      <button onClick={alternarTema}>Click</button>
    </Layout>
  );
}
