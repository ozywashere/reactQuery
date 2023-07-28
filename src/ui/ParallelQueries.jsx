import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:8000/super-heroes')
}

const fetchTodos = () => {
  return axios.get('http://localhost:8000/todos')
}

function ParallelQueries() {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
  const { data: todos } = useQuery('todos', fetchTodos)
  return <div>parallel queries</div>
}

export default ParallelQueries
