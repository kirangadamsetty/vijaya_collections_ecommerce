import HeroBanner from "../components/HeroBanner.jsx"
import OffersBand from "../components/OffersBand.jsx"
import TrendingPage from "../components/TrendingPage.jsx"
import CategorySlider from "../components/CategorySlider.jsx"
import { bannerData } from "../utils/mockData.jsx"
import { categoryData } from "../utils/mockData.jsx"
import { brandOffers } from "../utils/mockData.jsx"
import { homebanner } from "../utils/mockData.jsx"
import { trendingData } from "../utils/mockData.jsx"
import CategorySliderMain from "../components/CategorySliderMain.jsx"

function Home(){  

    return(
        <div>
         <HeroBanner bannerData = {bannerData}/>
         
        <CategorySliderMain categoryData = {categoryData}/>
        <TrendingPage trendingData = {trendingData}/>
         <HeroBanner bannerData = {homebanner}/>
       
 <TrendingPage trendingData = {brandOffers}/>
  <OffersBand/>
        </div>
    )
}

export default Home