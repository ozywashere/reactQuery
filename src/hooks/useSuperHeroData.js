import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1]
  return axios.get(`http://localhost:8000/super-heroes/${heroId}`)
}
export default function useSuperHeroData(heroId) {
  const queryClient = useQueryClient()
  return useQuery(['super-heros', heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient.getQueryData('super-heros')?.data?.find((hero) => hero.id === parseInt(heroId))
      if (hero) {
        return { data: hero }
      } else {
        return undefined
      }
    },
  })
}
