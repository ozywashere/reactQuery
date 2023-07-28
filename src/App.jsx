import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './ui/Header'
import RQSuperHeroes from './ui/RQSuperHeroes'
import RQSuperHero from './ui/RQSuperHero'
import SuperHeroes from './ui/SuperHeroes'
import ParallelQueries from './ui/ParallelQueries'
import DynamicParallelQueries from './ui/DynamicParallelQueries'
import PaginatedQueries from './ui/PaginatedQueries'
import InfiniteQuery from './ui/InfiniteQuery'

import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/infinitequery' element={<InfiniteQuery />} />
          <Route path='/paginatedqueries' element={<PaginatedQueries />} />
          <Route path='/dynamicparallelqueries' element={<DynamicParallelQueries heroIds={[1, 3]} />} />
          <Route path='/parallel-queries' element={<ParallelQueries />} />
          <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />} />
          <Route path='/super-heroes' element={<SuperHeroes />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
