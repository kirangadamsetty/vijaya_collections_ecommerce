import CategorySlider from "../components/CategorySlider.jsx"
import HeroBanner from "../components/HeroBanner.jsx"
import OffersBand from "../components/OffersBand.jsx"
import { kidCategory, kidsbanner } from "../utils/mockData.jsx"
function KidPage(){
   
    return(
        <>
           <HeroBanner bannerData = {kidsbanner}/>
        <CategorySlider categoryData={kidCategory} page = "kid"/>
<OffersBand/>
        </>
    )
}
export default KidPage