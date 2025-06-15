import HeroBanner from "../components/HeroBanner.jsx"
import TrendingPage from "../components/TrendingPage.jsx"
import { bannerData } from "../utils/mockData.jsx"
import { categoryData } from "../utils/mockData.jsx"
import { brandOffers } from "../utils/mockData.jsx"
import { homebanner } from "../utils/mockData.jsx"
import { trendingData } from "../utils/mockData.jsx"
import CategorySliderMain from "../components/CategorySliderMain.jsx"
import "../styles/heroBanner.css"
import HeroBanner2 from "../components/HeroBanner2.jsx"
function Home(){  

    return(
        <div>
         <HeroBanner bannerData = {bannerData}/>
         
        <CategorySliderMain categoryData = {categoryData}/>
        <TrendingPage trendingData = {trendingData}/>
         <HeroBanner2 bannerData = {homebanner}/>
       
 <TrendingPage trendingData = {brandOffers}/>
        </div>
    )
}

export default Home