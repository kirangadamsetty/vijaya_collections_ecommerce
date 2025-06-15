import Carousel from 'react-bootstrap/Carousel';
import "../styles/heroBanner.css"

function HeroBanner2({bannerData}) {

  return (
    <Carousel fade className = "w-100" indicators = {false} interval = {900}>
    {bannerData.map((data)=>{
      return  <Carousel.Item key = {data.id}>
      <div className = "banner-background">
<img src = {data.image} alt = "sareeBanner"/>
      </div>      
      
      </Carousel.Item>
    })}
      
    </Carousel>
  );
}

export default HeroBanner2;