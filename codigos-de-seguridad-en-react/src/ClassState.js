import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE =  'paradigma'

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: '',
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

        if (this.state.value === SECURITY_CODE) {
          this.setState({ error: false, loading: false })
        } else {
          this.setState({ error: true, loading: false })
        }

        console.log('terminar estado loading')
      }, 2000);
    }
  }

  render() {
    const { error, loading, value } = this.state

    return (
      <>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>

        {(error && !loading) && (
          <p>Error: el código es incorrecto</p>
        )}

        {loading && (
          <Loading />
        )}

        <input
          value={value}
          placeholder="Código de seguridad"
          onChange={(event) => {
            this.setState({ value: event.target.value })
          }}
        />
        <button
          onClick={() => this.setState({ loading: true })}
        >Comprobar</button>
      </>
    )
  }
}

export { ClassState }
