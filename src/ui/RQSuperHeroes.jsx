import Spinner from './Spinner'
import { Link } from 'react-router-dom'

import { useSuperHeroesData, useAddSuperHeroData } from '../hooks/useSuperHeroesData'
import { useState } from 'react'

function RQSuperHeros() {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

  const onSuccess = () => {
    console.log('Perform Side effect after data fetching')
  }
  const onError = () => {
    console.log('Perform Side effect after encountering error')
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

  const { mutate: addHero } = useAddSuperHeroData()
  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
    addHero(hero)
  }
  if (isLoading || isFetching) {
    return <Spinner />
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <div>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Refetch Heroes</button>
      <ul className='heroes'>
        {data?.data.map((hero) => {
          return (
            <li key={hero.id} className='hero'>
              <Link to={`/rq-super-heroes/${hero.id}`}>
                <h2>
                  <span>Name : </span>
                  <span>{hero.name}</span>
                </h2>

                <h3>
                  <span>Power : </span>
                  <span>{hero.power}</span>
                </h3>
                <h2>
                  <span>AlterEgo :</span>
                  <span>{hero.alterEgo}</span>
                </h2>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RQSuperHeros
