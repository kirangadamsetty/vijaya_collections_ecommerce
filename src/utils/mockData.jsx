import men from "../assets/categoryImages/category-home-men-image.png"
import women from "../assets/categoryImages/category-home-women-image.png"
import kid from "../assets/categoryImages/category-home-kid-image.png"
import handbags from "../assets/categoryImages/category-handBags.png"
import trendingdresses from "../assets/trendingImages/trending-dresses.jpg"
import mensTrending from "../assets/trendingImages/mens-trending.jpg"
import sareeTreding from "../assets/trendingImages/trending-saree.jpg"
import kidstrending from "../assets/trendingImages/kidstrending.jpg"
import sareeBanner1 from "../assets/bannerImages/saree-banner-image2.webp"
import womenBanner from "../assets/bannerImages/women-dresses-banner-image1.webp"
import womenBanner2 from "../assets/bannerImages/women-dresses-banner-image2.webp"
import menBanner from "../assets/bannerImages/mens-shirt-banner-image1.webp"
import kidsBanner from "../assets/bannerImages/kids-banner-image1.jpeg"
import autumnlane from "../assets/brandOffers/autumnlane-brand.avif"
import twentyBrand from "../assets/brandOffers/twenty-brand.avif"
import ciderBrand from "../assets/brandOffers/cider-brand.avif"
import foreverBrand from "../assets/brandOffers/forever-brand.avif"
import libasBrand from "../assets/brandOffers/libas-brand.avif"
import pumaBrand from "../assets/brandOffers/puma-brand.avif"
import preachersBrand from "../assets/brandOffers/peachers-brand.avif"
import uspoloBrand from "../assets/brandOffers/uspolo-brand.avif"
import menshirt from "../assets/mensCategory/mens-category-casualshirt.jpg"
import mentshirt from "../assets/mensCategory/mens-category-tshirt.webp"
import menhoddie from "../assets/mensCategory/mens-category-hoddie.webp"
import mencasualshirt from "../assets/mensCategory/mens-category-casualshirt.webp"
import mentraditional from "../assets/mensCategory/mens-category-traditional.webp"
import womensaree from "../assets/womensCategory/women-category-dailywear.avif"
import womendresses from "../assets/womensCategory/women-category-dresses.jpg"
import nightwear from "../assets/womensCategory/women-category-nightwear.webp"
import pattusaree from "../assets/womensCategory/women-category-pattusaree.jpg"
import handbag from "../assets/womensCategory/women-category-handbags.webp"
import kidshoddies from "../assets/kidsCategory/kids-category-hoddies.jpg"
import babygirldresses from "../assets/kidsCategory/kids-category-babyboydresses.jpg"
import babyboydresses from "../assets/kidsCategory/kids-category-babygirldresses.webp"
import kidstraditional from "../assets/kidsCategory/kids-category-traditionalwear.jpg"
import kidstshirts from "../assets/kidsCategory/kids-category-tshirts.webp"

export const womenCategory = [
    {image : womensaree, name :"Daily Wear Sarees"},
    {image : pattusaree, name :"Pattu Sarees"},
     {image : womendresses, name :"Dresses"},
      {image : nightwear, name :"Night Wear"},
       
        {image : handbag, name :"Hand Bags"},
        

]

export const kidCategory = [
    {image : kidshoddies, name :"Hoddies"},
    {image : babygirldresses, name :"Baby Boy Dresses"},
     {image : babyboydresses, name :"Baby Girl Dresses"},
      {image : kidstraditional, name :"Traditional Wear"},
       
        {image : kidstshirts, name :"T-shirts"},
        

]
 export  const categoryData = [
        {name : "Men", image : men},
        {name : "Hand Bags", image : handbags},
         {name : "Women", image : women},
          {name : "Kids", image : kid}
    ]

   export  const trendingData = [
        {heading :"Trending Now...", paragraph : ""},
        [
 {image: mensTrending, name : "Mens Wear"},
         {image: sareeTreding, name : "Bridal Wear"},
          {image: kidstrending, name : "Kids Wear"},
           {image: trendingdresses, name : "Traditional & Westren Wear"},
       
 
      
        ]
    ]

  export  const bannerData = [
      
        {image : womenBanner},
        {image : menBanner},
          {image : sareeBanner1},
        {image : kidsBanner}
      ]

 export   const homebanner =[
        {image : womenBanner},
        {image : womenBanner2}
    ]
    
 export   const brandOffers = [
         {heading :"Hottest brands on offer...", paragraph : "IN THE SPOTLIGHT"},
         [
            {image : autumnlane},
            {image : uspoloBrand},
            {image : pumaBrand},
            {image : preachersBrand},
            {image : libasBrand},
            {image : ciderBrand},
            {image : foreverBrand},
            {image : twentyBrand},
         ]
      ]


export const menCategory  = [
{image : menshirt, name : "Formal"},
{image : mentshirt, name : "T-Shirts"},
{image : mencasualshirt, name : "Casual Shirts"},
{image : menhoddie, name : "Hoddies"},
{image : mentraditional, name : "Traditional Wear"},
]























