import { useEffect, useState } from "react"

const SECURITY_CODE =  'paradigma'

export const UseState = ({ name }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    console.log('Empezando Effect')
    if (!!loading) {
      setError(false)
      setTimeout(() => {
        console.log('Cambiar estado loading')
        if (value !== SECURITY_CODE) {
          setError(true)
        }
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

        <input
          placeholder="Código de seguridad"
          value={value}
          onChange={handleChange}
        />
        <button onClick={() => setLoading(true)}>Comprobar</button>
      </>
  )
}
