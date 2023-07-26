import Spinner from './Spinner'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

function RQSuperHeros() {
  const onSuccess = () => {
    console.log('Perform Side effect after data fetching')
  }
  const onError = () => {
    console.log('Perform Side effect after encountering error')
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroData(onSuccess, onError)

  if (isLoading || isFetching) {
    return <Spinner />
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <div>
      <button onClick={refetch}>Refetch Heroes</button>
      <ul className='heroes'>
        {data?.data.map((hero) => {
          return (
            <li key={hero.id} className='hero'>
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RQSuperHeros
