// utils/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // ✅ This enables smooth scrolling
    }); // Scroll to top on every route change
  }, [pathname]);

  return null;
}

export default ScrollToTop;
