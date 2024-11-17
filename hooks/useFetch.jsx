import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        // Levanto la bandera de loading
        setLoading(true)
        
        // Hago el fetch
        fetch({url})
        .then((res) => res.json()) // Traduzco y obtengo la promesa
        .then((res) => {
            setError(false)
            setData(res)
        }) // Actualizo los resutlados
        .catch((error) => setError(error)) // Si algo salio mal, levanto la bandera de error
        .finally(() => {
            // Bajo la bandera de loading
            setLoading(false)
        })
    }, [url])
    
    return {data, loading, error}
}

export default useFetch