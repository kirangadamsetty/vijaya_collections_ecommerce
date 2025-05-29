import CategorySlider from "../components/CategorySlider.jsx"
import OffersBand from "../components/OffersBand.jsx"
import { kidCategory } from "../utils/mockData.jsx"
function KidPage(){
   
    return(
        <>
        <CategorySlider categoryData={kidCategory}/>
<OffersBand/>
        </>
    )
}
export default KidPage