import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:8000/colors?_limit=2&_page=${pageNumber}`)
}

function PaginatedQueries() {
  const [pageNumber, setPageNumber] = useState(1)

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['colors', pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
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
      </div>
      <div>
        <button onClick={() => setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1))}>
          Previous Page
        </button>
        <span>{pageNumber}</span>
        <button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}>Next Page</button>
      </div>
      {isFetching ? <span> Loading...</span> : null}
    </>
  )
}

export default PaginatedQueries
