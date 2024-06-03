import React from 'react'
import"./Home.css";
import Item from './Item';

function Home() {
  return (
    <div className='home'>
        <div className='homecontainer'>
        <img  className="homeimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/MyFirstLove/PC_Hero/3000x1200_My-Frist-Love_V2._CB597195052_.jpg" alt="background"/>

        <div className='homerow'>

           <Item id={101}
            title="Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things" 
            price={290}
            
            image="https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}/>

           <Item 
           id={102}
           title="Minimalist 2% Salicylic Acid Face Wash For Oily Skin | Sulphate Free, Anti Acne Face Cleanser With Lha" 
            price={299}
            image="https://m.media-amazon.com/images/I/51qpGr-1qzL._AC_UL600_FMwebp_QL65_.jpg"
            rating={3}/>

           <Item
           id={103} 
           title="Carlton London Women Limited Edition Blush Eau de Parfum - 100 ml" 
            price={1200}
            image="https://m.media-amazon.com/images/I/61kGDKJtLdL._AC_UL600_FMwebp_QL65_.jpg"
            rating={4}/>
      
        </div>

        <div className='homerow'>
        <Item id={104}
        title="Samsung Galaxy M14 5G (Smoky Teal, 4GB, 128GB Storage)" 
            price={16000}
            image="https://m.media-amazon.com/images/I/91zMokvCNuL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}/>

        <Item id={105}
        title="LAPSTER 12pcs Spiral Cable Protectors for Charger" 
            price={150}
            image="https://m.media-amazon.com/images/I/616xqxK4CTL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}/>

        </div>


        <div className='homerow'>
        <Item id={150}
        title="Tizum Mouse Pad " 
            price={200}
            image="https://m.media-amazon.com/images/I/81ha67yYQuL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}/>
            
        <Item  id={107}
        title="Celestron AstroMaster 130 EQ Telescope" 
            price={20000}
            image="https://m.media-amazon.com/images/I/51ACmMfpSEL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}/>

        </div>





        </div>


    </div>
  )
}

export default Home