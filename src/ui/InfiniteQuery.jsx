import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { Fragment } from 'react'

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:8000/colors?_limit=2&_page=${pageParam}`)
}

function InfiniteQuery() {
  const { isLoading, isError, error, data, hasNextPage, isFetching, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(['colors'], fetchColors, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1
        } else {
          return undefined
        }
      },
    })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((color) => {
                return (
                  <div key={color.id}>
                    <h2>
                      <span>Name : </span>
                      <span>{color.name}</span>
                    </h2>
                    <h3>
                      <span>Hex : </span>
                      <span>{color.hex}</span>
                    </h3>
                  </div>
                )
              })}
            </Fragment>
          )
        })}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load More
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching' : null}</div>
    </>
  )
}

export default InfiniteQuery
