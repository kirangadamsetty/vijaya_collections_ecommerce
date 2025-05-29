import CategorySlider from "../components/CategorySlider.jsx"
import OffersBand from "../components/OffersBand.jsx"
import { womenCategory } from "../utils/mockData"
function WomenPage(){
   
    return(
        <>
        <CategorySlider categoryData={womenCategory}/>
<OffersBand/>
        </>
    )
}
export default WomenPage