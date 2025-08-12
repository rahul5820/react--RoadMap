

import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const navLinkStyle=({isActive})=>{
        return{
            font:isActive?'bold':'normal',
            color:isActive?'blue':'Green',
            
        }

    }
  return (
    <nav>
      <NavLink to="/" className="nav" activeclassname="active" exact="true">
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyle}>
        About
      </NavLink>
      <NavLink to="/contact" className="nav"  style={navLinkStyle}>
        Contact
      </NavLink>
      <NavLink to="/registration" className="nav"  style={navLinkStyle} >
      Registration
      </NavLink>
      <NavLink to="/product" className="nav" style={navLinkStyle} id='product'>Product</NavLink>
      <NavLink to="/userpage" className="nav" style={navLinkStyle} >User</NavLink>
      <NavLink to="/book" className="nav" style={navLinkStyle} >Books</NavLink>
    </nav>
  );
};

export default Navbar;
