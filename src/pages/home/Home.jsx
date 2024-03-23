import Banner from '../../components/Banner'
import QueHacemos from "../../components/queHacemos/QueHacemos";
import Convocatorias from "../../components/convocatorias/Convocatorias";
import Aliados from "../../components/aliados/Aliados";
import Financiadores from "../../components/aliados/Financiadores";
import Impacto from "../../components/Impacto";
import Oportunidades from "../../components/oportunidades/Oportunidades";
import Contacto from "../../components/contacto/Contacto";

const Home = () => {
  return (
    <div>
      <Banner />
      <QueHacemos />
      <Convocatorias />
      <Aliados />
      <Financiadores />
      <Impacto />
      <Oportunidades />
      <Contacto />
    </div>
  );
};

export default Home;
