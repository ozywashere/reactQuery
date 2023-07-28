import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='logo'>
        Home
      </Link>
      <div className='links'>
        <Link to='/infinitequery'>Infinite Query</Link>
        <Link to='/paginatedqueries'>Paginated Queries</Link>
        <Link to='/dynamicparallelqueries'>Dynamic Parallel Queries</Link>
        <Link to='/parallel-queries'>Parallel Queries</Link>
        <Link to='/super-heroes'>Super Heroes</Link>
        <Link to='/rq-super-heroes'>RqSuperHeroes</Link>
      </div>
    </div>
  )
}

export default Navbar
