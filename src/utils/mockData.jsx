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
import babyboydresses from "../assets/kidsCategory/kids-category-babygirldresses.jpg"
import kidstraditional from "../assets/kidsCategory/kids-category-traditionalwear.jpg"
import kidstshirts from "../assets/kidsCategory/kids-category-tshirts.jpg"
import menspagebanner1 from "../assets/bannerImages/menspagebannerimage1.webp"
import menspagebanner2 from "../assets/bannerImages/menspagebannerimage2.webp"
import kidspagebanner1 from "../assets/bannerImages/kidspagebannerimage6.webp"
import kidspagebanner2 from "../assets/bannerImages/kidspagebannerimage5.jpg"
import { menspagesData } from "./mensPageMockData"
import { womenspagesData } from "./womensPageMockData"
import { kidspagesData } from "./kidsPageMockData"

export const womenCategory = [
  { id: "women-1", image: womensaree, name: "Daily Wear Sarees", category :"dailywearsaree" },
  { id: "women-2", image: pattusaree, name: "Pattu Sarees" ,category:"pattusaree"},
  { id: "women-3", image: womendresses, name: "Dresses",category :"dress"},
  { id: "women-4", image: nightwear, name: "Night Wear", category:"nightwear"},
  { id: "women-5", image: handbag, name: "Hand Bags" ,category:"handbag"},
];

export const kidCategory = [
  { id: "kid-1", image: kidshoddies, name: "Hoddies",category : "hoddie" },
  { id: "kid-2", image: babygirldresses, name: "Baby Boy Dresses",category : "babyboydress" },
  { id: "kid-3", image: babyboydresses, name: "Baby Girl Dresses" ,category : "babygirldress"},
  { id: "kid-4", image: kidstraditional, name: "Traditional Wear" ,category : "traditional"},
  { id: "kid-5", image: kidstshirts, name: "T-shirts",category : "tshirt" },
];

export const categoryData = [
  { id: "cat-1", name: "Men", image: men },
  { id: "cat-2", name: "Hand Bags", image: handbags },
  { id: "cat-3", name: "Women", image: women },
  { id: "cat-4", name: "Kids", image: kid },
];

export const trendingData = [
  { heading: "Hot & Happening Now", paragraph: "EXPLORE DIVERSE COLLECTIONS" },
  [
    { id: "trend-1", image: mensTrending, name: "Mens Wear" , description :" Fashion for every man." , link :"men"},
    { id: "trend-2", image: sareeTreding, name: "Bridal Wear" ,description :"For your big day.", link : "women"},
    { id: "trend-3", image: kidstrending, name: "Kids Wear" ,description :"Style for little ones.", link : "kids"},
    { id: "trend-4", image: trendingdresses, name: "Traditional & Westren Wear",description :" Ethnic meets modern.", link : "women" },
  ]
];

export const bannerData = [
   
  { id: "banner-1", image: womenBanner },
    { id: "banner-3", image: sareeBanner1 },
 { id: "banner-2", image: menspagebanner1 },
 {id : "banner-4", image : kidspagebanner2}
 
 
];
export const kidsbanner = [
    {id : "kidsbaner-1", image : kidspagebanner1},
    {id : "kidsbanner-2", image : kidspagebanner2}
]
export const homebanner = [
  { id: "homebanner-1", image: womenBanner },
  { id: "homebanner-2", image: womenBanner2 },
  { id: "homebanner-3", image: menspagebanner2 },
    // { id: "homebanner-3", image: menBanner },
];

export const menspagebanner  = [
   {id: "menspagebanner-1", image : menspagebanner1},
   {id: "menspagebanner-2", image : menspagebanner2}
]
export const brandOffers = [
  { heading: "Hottest brands on offer", paragraph: "IN THE SPOTLIGHT" },
  [
    { id: "brand-1", image: autumnlane },
    { id: "brand-2", image: uspoloBrand },
    { id: "brand-3", image: pumaBrand },
    { id: "brand-4", image: preachersBrand },
    { id: "brand-5", image: libasBrand },
    { id: "brand-6", image: ciderBrand },
    { id: "brand-7", image: foreverBrand },
    { id: "brand-8", image: twentyBrand },
  ]
];

export const menCategory = [
  { id: "men-1", image: menshirt, name: "Formal" , category : "formalshirt"},
  { id: "men-2", image: mentshirt, name: "T-Shirts" ,category : "tshirt" },
  { id: "men-3", image: mencasualshirt, name: "Casual Shirts", category : "casualshirt" },
  { id: "men-4", image: menhoddie, name: "Hoddies", category : "hoddie" },
  { id: "men-5", image: mentraditional, name: "Traditional Wear" , category : "traditional"},
];




export const products =  [...menspagesData, ...womenspagesData, ...kidspagesData]


















