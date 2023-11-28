import React from 'react';
import './Letreiro.css';

class Letreiro extends React.Component {
  constructor(props) {
    super(props);
    this.textoTotal = "Conheça a Fatec";
    this.i = 0;

    this.state = {
      texto: "",
    };

  
    setInterval(() => {
      this.atualizarTexto();
    }, 100);
  }

  atualizarTexto() {
    if (this.i < this.textoTotal.length) {
      this.setState((prevState) => ({
        texto: prevState.texto + this.textoTotal[this.i],
      }));
      this.i++;
    } else {
      
      this.i = 0;
      this.setState(() => ({
        texto: "",
      }));
    }
  }

  render() {
    const { texto } = this.state;

    return (
      <div>
        {/* Adicionei uma classe CSS para estilização opcional */}
        <h1 className="letreiro-texto">{texto}</h1>
      </div>
    );
  }
}

export default Letreiro;