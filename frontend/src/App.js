import React, { lazy, Suspense ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header/Navbar" 
import Footer from "./component/layout/Footer/Footer.js"
import './App.css'; 
import ScrollToTop from './ScrollToTop';
import { loadUser} from './actions/userAction';
import { useSelector } from "react-redux";
import store from "./store";
import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Loader from './component/layout/Loader/Loader';

import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment"

const Home = lazy(() =>  import("./component/Home/Home.js"))
const ProductDetails = lazy(() =>  import("./component/Product/ProductDetails.js"))
const Products = lazy(() =>  import("./component/Product/Products.js"))
const Search = lazy(() =>  import("./component/Product/Search.js"))
const LoginSignUp = lazy(() =>  import("./component/User/LoginSign"))
const Profile = lazy(() =>  import("./component/User/Profile"))
const UpdateProfile = lazy(() =>  import("./component/User/UpdateProfile"))
const UpdatePassword = lazy(() =>  import("./component/User/UpdatePassword"))
const ForgotPassword = lazy(() =>  import("./component/User/ForgotPassword"))
const ResetPassword = lazy(() =>  import("./component/User/ResetPassword"))
const Cart = lazy(() =>  import("./component/Cart/Cart"))
const OrderSuccess = lazy(() =>  import("./component/Cart/OrderSuccess"))
const MyOrders = lazy(() =>  import("./component/Order/MyOrders"))
const OrderDetails = lazy(() =>  import("./component/Order/OrderDetails"))
const Dashboard = lazy(() =>  import("./component/Admin/Dashboard.js"))
const ProductList = lazy(() =>  import("./component/Admin/ProductList.js"))
const NewProduct = lazy(() =>  import("./component/Admin/NewProduct.js"))
const UpdateProduct = lazy(() =>  import("./component/Admin/UpdateProduct.js"))
const OrderList = lazy(() =>  import("./component/Admin/OrderList.js"))
const ProcessOrder = lazy(() =>  import("./component/Admin/ProcessOrder.js"))
const UsersList = lazy(() =>  import("./component/Admin/UsersList.js"))
const UpdateUser = lazy(() =>  import("./component/Admin/UpdateUser.js"))
const ProductReviews = lazy(() =>  import("./component/Admin/ProductReviews.js"))
const Contact = lazy(() =>  import("./component/layout/Contact/Contact.js"))
const About = lazy(() =>  import("./component/layout/About/About"))
const Terms = lazy(() =>  import("./component/layout/T&C/Terms.js"))
const Privacy = lazy(() =>  import("./component/layout/Privacy/Privacy"))
const Refund = lazy(() =>  import("./component/layout/Return/Return"))
const ShippingPolicy = lazy(() =>  import("./component/layout/Shipping/Shipping"))
const NotFound = lazy(() =>  import("./component/layout/Not Found/NotFound.js"))


 function App() {

    const { isAuthenticated, user } = useSelector((state) => state.user);

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    
    window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
  <div className="App">
    
   <Router>
    <ScrollToTop/>
    <Header/>
    {isAuthenticated && <UserOptions user={user} />}
    <Suspense fallback={<div><Loader/></div>}>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <Route exact path="/terms" component={Terms} />

        <Route exact path="/privacy" component={Privacy} />

        <Route exact path="/return" component={Refund} />

        <Route exact path="/shippingpolicy" component={ShippingPolicy} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/process/payment" component={Payment} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/confirm/order" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>
    </Suspense>
    <Footer/>
   </Router>
  </div>
  )
 }

 export default App;
