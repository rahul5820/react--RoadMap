import { Link ,Outlet} from "react-router-dom";

const Product = () => {
  return (
    <>
    <input type='search' placeholder="enter Product"/>
     
<nav>
 <Link to="featured" className="nav-link">Featured </Link>
 <Link to="New" className="nav-link">New</Link>


</nav>
<Outlet/>

    </>
  )
}

export default Product;