import { Link } from "react-router-dom";
import Calculadora from "./Calculadora";
function Atividade04() {
  return (
    <>
        <Calculadora />
        <span> <Link to={"/"}>Retornar a pagina Inicial</Link></span>
    </>
  );
}

export default Atividade04;
