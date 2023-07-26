import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
const url = 'http://localhost:8000/super-heroes'
function SuperHeroes() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(url)
      const data = res.data
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setError(error.message)
      setIsLoading(false)
    }
  }
  useEffect(function () {
    fetchData()
  }, [])

  return (
    <div>
      {isLoading && <Spinner />}

      {error && <div>Something went wrong ...</div>}
      {data.map((hero) => {
        return (
          <div key={hero.id}>
            <h2>
              <span>Name : </span>
              <span>{hero.name}</span>
            </h2>
            <h3>
              <span>Power : </span>
              <span>{hero.power}</span>
            </h3>
            <h2>
              <span>Alter Ego :</span>
              <span>{hero.alterEgo}</span>
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export default SuperHeroes
