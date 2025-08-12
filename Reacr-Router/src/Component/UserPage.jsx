
import {Link,Outlet} from 'react-router-dom'
const UserPage = () => {
  return (
    <>
    <nav>
  <Link to="id" className="nav-link">Details</Link>
  <Link to="orders" className="nav-link">Orders </Link>
  <Link to="wishlist" className="nav-link">Wishlist</Link>

    </nav>
    <Outlet/>

    </>
  )
}

export default UserPage