
import React from 'react';
import './Relogio.css';

class Relogio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      horario: new Date(),
    };
  }

  atualizarHorario() {
    this.setState({ horario: new Date() });
  }
  componentDidMount() {
   
    this.intervalo = setInterval(() => {
      this.atualizarHorario();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    const { horario } = this.state;
    const formated_data = horario.toLocaleDateString('pt-br');
    const formated_horario = horario.toLocaleTimeString('pt-br');
    const horario_completo = formated_data + " " + formated_horario;

    return (
      <div>
        <h2>{horario_completo}</h2>
      </div>
    );
  }
}

export default Relogio;