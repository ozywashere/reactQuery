import useSuperHeroData from '../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'
function RQSuperHeroDetails() {
  const { heroId } = useParams()
  const { isLoading, data, isError, error } = useSuperHeroData(heroId)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <div className='card'>
      <h1>Super Hero Details</h1>
      <h2>
        <span>Name : </span>
        <span>{data.data.name}</span>
      </h2>
      <h3>
        <span>Power : </span>
        <span>{data.data.power}</span>
      </h3>
      <h2>
        <span>AlterEgo :</span>
        <span>{data.data.alterEgo}</span>
      </h2>
    </div>
  )
}

export default RQSuperHeroDetails
