import CategorySlider from "../components/CategorySlider.jsx"
import OffersBand from "../components/OffersBand.jsx"
import { menCategory } from "../utils/mockData"
function MenPage(){
   
    return(
        <>
        <CategorySlider categoryData={menCategory}/>
<OffersBand />
        </>
    )
}
export default MenPage