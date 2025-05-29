import Carousel from 'react-bootstrap/Carousel';
import "../styles/heroBanner.css"

function HeroBanner({bannerData}) {

  return (
    <Carousel fade className = "w-100" indicators = {false} interval = {900}>
    {bannerData.map((data)=>{
      return  <Carousel.Item>
      <div className = "banner-background banner-overlay">
<img src = {data.image} alt = "sareeBanner"/>
      </div>      
      
      </Carousel.Item>
    })}
      
    </Carousel>
  );
}

export default HeroBanner;