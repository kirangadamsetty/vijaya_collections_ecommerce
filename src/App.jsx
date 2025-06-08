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
import ProductInfoPage from "./components/ProductInfoPage.jsx"
import WishListContextProvider from "./utils/WishListContextProvider.jsx"
import WishListPage from './pages/WishListPage.jsx';
function App(){
  return(
      <div>
      <WishListContextProvider>
      <CategoryContextProvider>
      <Header/>
      <Outlet/>
      <Footer/>
      </CategoryContextProvider>
      </WishListContextProvider>
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
        path : "/wishList",
        element : <WishListPage/>,
        errorElement : <Error/>
      }
    ]
  }
])

