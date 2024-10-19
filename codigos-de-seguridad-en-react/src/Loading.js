import React from "react";

class Loading extends React.Component {
  componentWillUnmount() {
    console.log('Loading: componentWillUnmount')
  }

  render() {
    return (
      <p>Cargando...</p>
    )
  }
}

export { Loading }
