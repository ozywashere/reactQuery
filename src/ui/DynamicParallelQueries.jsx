import { useQueries } from 'react-query'
import axios from 'axios'
import PropTypes from 'prop-types'
const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:8000/super-heroes/${heroId}`)
}

const DynamicParallelQueries = ({ heroIds }) => {
  const queries = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-heros', id],
        queryFn: () => fetchSuperHero(id),
      }
    })
  )

  console.log({ queries })
  return (
    <div>
      <h2>Dynamic Parallel Queries</h2>
    </div>
  )
}

DynamicParallelQueries.propTypes = {
  heroIds: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default DynamicParallelQueries
