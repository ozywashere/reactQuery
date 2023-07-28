import { useQuery, useMutation, useQueryClient } from 'react-query'
import { request } from '../utils/axios-utils'
const fetchSuperHeroes = () => {
  // return axios.get('http://localhost:8000/super-heroes')
  return request({
    url: '/super-heroes',
    method: 'get',
  })
}

const addSuperHero = (hero) => {
  // return axios.post('http://localhost:8000/super-heroes', hero)
  return request({
    url: '/super-heroes',
    method: 'post',
    data: hero,
  })
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
  })
}

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries('super-heroes')
    //   queryClient.setQueryData('super-heroes', (oldData) => {
    //     return {
    //       ...oldData,
    //       data: [...oldData.data, data.data],
    //     }
    //   })
    // },
    onMutate: async (newHero) => {
      await queryClient.cancelQueries('super-heroes')
      const previousData = queryClient.getQueryData('super-heroes')
      queryClient.setQueryData('super-heroes', (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, newHero],
        }
      })
      return { previousData }
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('super-heroes', context.previousData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('super-heroes')
    },
  })
}
