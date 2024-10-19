import { useEffect, useState } from "react"

export const UseState = ({ name }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Empezando Effect')
    if (!!loading) {
      setTimeout(() => {
        console.log('Cambiar estado loading')
        setLoading(false)
        console.log('terminar estado loading')
      }, 2000);
    }
    console.log('Terminando Effect')
  }, [loading])
  

  return (
    <>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {error && (
          <p>Error: el código es incorrecto</p>
        )}
        {loading && (
          <p>Cargando...</p>
        )}

        <input placeholder="Código de seguridad" />
        <button onClick={() => setLoading(true)}>Comprobar</button>
      </>
  )
}
