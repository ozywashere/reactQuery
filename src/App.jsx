import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './ui/Home'
import RQSuperHeros from './ui/RQSuperHeros'
import SuperHeroes from './ui/SuperHeroes'
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()
import { ReactQueryDevtools } from 'react-query/devtools'
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/super-heroes' element={<SuperHeroes />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeros />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
