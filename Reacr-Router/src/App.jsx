import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import Registration from "./Pages/Registration";
import OrderSummary from "./Component/OrderSummary";
import FormSubmitted from "./Component/FormSubmitted";
import NoMatch from "./Component/NoMatch";
import Product from "./Component/Product";
import FeaturedProduct from "./Pages/FeaturedProduct";
import NewProduct from "./Pages/NewProduct";
import UserPage from "./Component/UserPage";
import Deatails from "./Pages/Deatails";
import Order from "./Pages/Order";
import WishList from "./Pages/WishList";
import Books from "./Pages/Books";
import BooksDetails from "./Pages/BooksDetails";

function App() {
  return (
    <div className="Main-container">
  
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/order-summary" element={<OrderSummary/>}/>
          <Route path="/contact/form-submit" element={<FormSubmitted/>}/>
          <Route path="/userpage" element={<UserPage/>}>
           <Route path="id" element={<Deatails/>}/>
           <Route path="orders" element={<Order/>}/>
           <Route path="wishlist" element={<WishList/>}/>
          </Route>
          <Route path="/product" element={<Product />} >
                <Route index="featured" element={<FeaturedProduct/>} ></Route>
                <Route path="featured" element={<FeaturedProduct/>} />
                <Route path="new" element={<NewProduct/>} />
          </Route>
          <Route path='/book' element={<Books/>} >
          <Route path=':bookId' element={<BooksDetails/>} />
          </Route>

          <Route path="*" element={<NoMatch/>}/>

        </Routes>

    </div>
  );
}

export default App;
