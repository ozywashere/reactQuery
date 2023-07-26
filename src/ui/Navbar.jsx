import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/home' className='logo'>
        Home
      </Link>
      <div className='links'>
        <Link to='/super-heroes'>Super Heroes</Link>
        <Link to='/rq-super-heroes'>RqSuperHeroes</Link>
      </div>
    </div>
  )
}

export default Navbar
