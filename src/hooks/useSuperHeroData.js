import { useQuery } from 'react-query'
import axios from 'axios'
const fetchSuperHeroes = () => {
  return axios.get('http://localhost:8000/super-heroes')
}

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
  })
}
