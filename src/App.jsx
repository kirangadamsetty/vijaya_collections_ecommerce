import Header from './components/Header.jsx';
import "./App.css"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import {createBrowserRouter, Outlet} from "react-router-dom"
import ErrorElement from "./components/ErrorElement.jsx"
import MenPage from "./pages/MenPage.jsx"
import WomenPage from './pages/WomenPage.jsx';
import KidPage from './pages/KidPage.jsx';
import CategoryContextProvider from "./utils/CategoryContextProvider.jsx"
import Cart from "./pages/Cart.jsx"
import CartContextProvider from "./utils/CartContextProvider"
import ProductInfoPage from "./components/ProductInfoPage.jsx"
import WishListContextProvider from "./utils/WishListContextProvider.jsx"
import WishListPage from './pages/WishListPage.jsx';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from "./components/ScrollToTop"
function App(){
  return(
      <div>
    
      <CartContextProvider>
      <WishListContextProvider>
      <CategoryContextProvider>
        <ToastContainer/>
      <ScrollToTop/>
      <Header/>
      <Outlet/>
      <Footer/>
      </CategoryContextProvider>
      </WishListContextProvider>
      </CartContextProvider>
      </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement : <ErrorElement/>,
    children: [
      {
        path: "/",
        element : <Home/>,
        errorElement : <ErrorElement/>
      },{
        path : "/men",
        element :<MenPage/>,
        errorElement : <ErrorElement/>
      },{
        path : "/women",
        element :<WomenPage/>,
        errorElement : <ErrorElement/>
      },{
        path : "/kids",
        element :<KidPage/>,
        errorElement : <ErrorElement/>
      },{
        path : "/productInfo",
        element : <ProductInfoPage/>,
        errorElement : <Error/>
      },{
        path : "/wishlist",
        element : <WishListPage/>,
        errorElement : <Error/>
      },{
        path : "/cart",
        element : <Cart/>,
        errorElement : <Error/>
      }
    ]
  }
])

