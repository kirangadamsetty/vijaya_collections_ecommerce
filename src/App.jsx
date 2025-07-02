import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
import Shimmer from "./components/Shimmer.jsx"
import CategoryContextProvider from "./utils/CategoryContextProvider.jsx";
import CartContextProvider from "./utils/CartContextProvider.jsx";
import WishListContextProvider from "./utils/WishListContextProvider.jsx";
import SearchContextProvider from "./utils/SearchContextProvider.jsx";
import AuthContextProvider from "./utils/AuthContextProvider.jsx";
import "./App.css";

// ✅ Lazy loaded components
const Home = lazy(() => import("./pages/Home.jsx"));
const MenPage = lazy(() => import("./pages/MenPage.jsx"));
const WomenPage = lazy(() => import("./pages/WomenPage.jsx"));
const KidPage = lazy(() => import("./pages/KidPage.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const WishListPage = lazy(() => import("./pages/WishListPage.jsx"));
const SearchInfoPage = lazy(() => import("./pages/SearchInfoPage.jsx"));
const ProductInfoPage = lazy(() => import("./components/ProductInfoPage.jsx"));

function App() {
  return (
    <div>
      <AuthContextProvider>
        <SearchContextProvider>
          <CartContextProvider>
            <WishListContextProvider>
              <CategoryContextProvider>
                <ToastContainer />
                <ScrollToTop />
                <Header />
                <Suspense fallback={<div>{<Shimmer/>}</div>}>
                  <Outlet />
                </Suspense>
                <Footer />
              </CategoryContextProvider>
            </WishListContextProvider>
          </CartContextProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

// ✅ Router setup (in same file)
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/men",
        element: <MenPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/women",
        element: <WomenPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/kids",
        element: <KidPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/productInfo",
        element: <ProductInfoPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/search",
        element: <SearchInfoPage />,
        errorElement: <ErrorElement />,
      },{
        path :"/shimmer",
        element : <Shimmer/>
      }
    ]
  }
]);
