import React from 'react'
import "./Home.css"
import Product from "./Product"

const Home = () => {
  return (
    <div className='home'>
        
        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
        <div className='home_row'>
          <Product id="1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zDAEkAEX8SRYPk5y7czSGiD37OcjXW7Oxw&usqp=CAU" title="The Lean Startup: How constant innovation creates Radically Successful Business paperback" price="11.96" rating="5" />
          <Product id="2" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_oXyjmix1tqwg1K_UvkW_kEebBRUCss-Aw&usqp=CAU" title="Kenwood kMix Stand Mixer for Banking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price="239" rating="4" />
        </div>  
        <div className='home_row'>
          <Product id="3" title="Samsung\nLC49G90SSUXEN 49\nCurved LED Gaming Monitor" price="199.99" rating="3" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTezLcNLQwXphms5a0L7w-G63sp-iHHC9YA&usqp=CAU"/>
          <Product id="4" title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric" price="98.99" rating="4" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGHOELMBYohULiFufjApArNQzbfDqC1h0jQ&usqp=CAU"/>
          <Product id="5" title="New Apple ipad Pro(12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)" price="598.99" rating="5" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSkR4S_H9DD4sYONOLdexWmgCh-jdkBb1Jw&usqp=CAU"/>
        </div>  
        <div className='home_row'>
          <Product id="6" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQFYEDNjmXFtLW7cf467K-Y_4RisBBwqTyg&usqp=CAU" title="Samsung LC$(RG9DSSUXEN 49' Curved LED Gaming Monitor- Super Ultra Wiode Dual WQHD 5120 x 1440" price="1094.98" rating="4" />
        </div>  
         
    </div>
  )
}

export default Home
