import { useState } from 'react';
import Display from './Display';
import Botao from './Botao';
import './Calculadora.css';

function Calculadora() {
  const [valorDisplay, setValorDisplay] = useState('0');
  const [limparDisplay, setLimparDisplay] = useState(false);
  const [operacao, setOperacao] = useState(null);
  const [valores, setValores] = useState([0, 0]);
  const [indice, setIndice] = useState(0);

  function _adicionar(label) {
    if (label === '.' && valorDisplay.includes('.')) return;

    const checkLimparDisplay = valorDisplay === '0' || limparDisplay;
    const valorAtual = checkLimparDisplay ? '' : valorDisplay;

    const novoValorDisplay = valorAtual + label;
    const novosValores = [...valores];

    if (label !== '.') novosValores[indice] = parseFloat(novoValorDisplay);

    setValorDisplay(novoValorDisplay);
    setLimparDisplay(false);
    setValores(novosValores);
  }

  function _limparDisplay() {
    setValorDisplay('0');
    setLimparDisplay(false);
    setOperacao(null);
    setValores([0, 0]);
    setIndice(0);
  }

  function _acao(operacaoClicada) {
    if (valores[0] === 0) return;

    if (indice === 0) {
      setIndice(1);
      setOperacao(operacaoClicada);
      setLimparDisplay(true);
    } else {
      const igual = operacaoClicada === '=';
      const novosValores = [...valores];

      try {
        novosValores[0] = eval(`${novosValores[0]} ${operacao} ${novosValores[1]}`);
      } catch (error) {
        novosValores[0] = valores[0];
      }

      novosValores[1] = 0;

      setValorDisplay(novosValores[0]);
      setLimparDisplay(!igual);
      setOperacao(igual ? null : operacaoClicada);
      setValores(novosValores);
      setIndice(igual ? 0 : 1);
    }
  }

  return (
    <div className="Calculadora">
      <Display valor={valorDisplay} />
      <Botao label="AC" classe="operador" funcao={_limparDisplay} tamanho="2" />
      <Botao label="%" classe="operador" funcao={_acao} />
      <Botao label="/" classe="operador" funcao={_acao} />
      <Botao label="7" classe="numero" funcao={_adicionar} />
      <Botao label="8" classe="numero" funcao={_adicionar} />
      <Botao label="9" classe="numero" funcao={_adicionar} />
      <Botao label="*" classe="operador" funcao={_acao} />
      <Botao label="4" classe="numero" funcao={_adicionar} />
      <Botao label="5" classe="numero" funcao={_adicionar} />
      <Botao label="6" classe="numero" funcao={_adicionar} />
      <Botao label="-" classe="operador" funcao={_acao} />
      <Botao label="1" classe="numero" funcao={_adicionar} />
      <Botao label="2" classe="numero" funcao={_adicionar} />
      <Botao label="3" classe="numero" funcao={_adicionar} />
      <Botao label="+" classe="operador" funcao={_acao} />
      <Botao label="0" classe="numero" funcao={_adicionar} tamanho="2" />
      <Botao label="." classe="numero" funcao={_adicionar} />
      <Botao label="=" classe="operador" funcao={_acao} />
    </div>
  );
}

export default Calculadora;