import { Link } from "react-router-dom";
import Contador from "./Contador";
import './Atividade02.css';

function Atividade02() {
  return (
    <>
      <h1 className="title">Atividade 02</h1>
      <Contador />
      <span> <Link to={"/"}>Retornar a página Inicial</Link></span>
    </>
  );
}

export default Atividade02;
