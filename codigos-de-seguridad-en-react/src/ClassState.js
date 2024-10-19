import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    }
  }

  UNSAFE_componentWillMount() {
    console.log('ClassState: componentWillMount')
  }

  componentDidMount() {
    console.log('ClassState: componentDidMount')
  }

  /* Cada vez que actualicemos el estado del componente se
  ejecutará componentDidUpdate: */
  componentDidUpdate() {
    console.log('ClassState: componentDidUpdate')
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log('Cambiar estado loading')
        this.setState({ loading: false })
        console.log('terminar estado loading')
      }, 2000);
    }
  }

  render() {
    return (
      <>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>

        {this.state.error && (
          <p>Error: el código es incorrecto</p>
        )}

        {this.state.loading && (
          <Loading />
        )}

        <input placeholder="Código de seguridad" />
        <button
          onClick={() => this.setState({ loading: true })}
        >Comprobar</button>
      </>
    )
  }
}

export { ClassState }
