import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        // Levanto la bandera de loading
        setLoading(true)
        
        // Debug
        //console.log("Fetching URL: " + url)
        
        // Hago el fetch
        fetch(url)
        .then((res) => {
            return res.json()
        }) // Traduzco y obtengo la promesa
        .then((res) => {
            //console.log(res.results)
            setError(false)
            setData(res.results)
        }) // Actualizo los resutlados
        .catch((error) => {
            //console.log(error)
            setError(error) // Si algo salio mal, levanto la bandera de error
        })
        .finally(() => {
            // Bajo la bandera de loading
            setLoading(false)
        })
    }, [url])
    
    return {data, loading, error}
}

export default useFetch

/* (Ejemplo de uso)

import useFetch from './../../hooks/useFetch'

const { data } = useFetch("https://rickandmortyapi.com/api/character")
console.log(data)

*/