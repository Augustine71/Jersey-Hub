import React from "react";
import psg from "../images/psg.jpg";
import barca from "../images/barca.jpg";
import bayern from "../images/bayern.jpg";
import adidas from "../images/adidas.jpg";
import nike from "../images/nike.jpg";
import puma from "../images/puma.jpg";
import shin1 from "../images/shin1.jpg";
import shin2 from "../images/shin2.jpg";
import shin3 from "../images/shin3.jpg";
import socks1 from "../images/socks1.jpg";
import socks2 from "../images/socks2.jpg";
import socks3 from "../images/socks3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


SwiperCore.use([Navigation]);
 

function Bot({onClick,upd}) {
    

    if(upd=== "OrderJersey")
    {
    return(
        <div>
        <button id="Order-Jersey" value='Order Jersey' onClick={onClick}>Order your Jersey</button>
        <button id="Order-Details" value='Order Details' onClick={onClick}>Check Order Status</button>
        </div>
    )
    }
    else if(upd ==="Order-Jersey")   
    {
    return(
        <div className="swiper">
           <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
           
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="slide">
                <div className="slide-content">
                    <div className="slide-img">
                        <img src={psg} alt="Psg Jersey" id="psg" onClick={onClick}/>
                    </div>
                    <h4 className="food">PSG</h4>
                    <br/>
                    <h4 className="price">Rs.850</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <div className="slide-content">
                    <div className="slide-img">
                        <img src={barca} alt="barca jersey" id="barca" onClick={onClick}/>
                    </div>
                    <h4 className="food">Barcelona</h4>
                    <br/>
                    <h4 className="price">Rs.900</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <div className="slide-content">
                    <div className="slide-img">
                        <img src={bayern} alt="bayern jersey" id="bayern" onClick={onClick}/>
                    </div>
                    <h4 className="food">Bayern</h4>
                    <br/>
                    <h4 className="price">Rs.800</h4>
                </div>
            </SwiperSlide>
          
            
         </Swiper>
        </div>
        
    )
    }

    else if(upd==="psg"||upd==="barca"||upd==="bayern")
    {
      return(
          <div>
               <button id="num1" value='1' onClick={onClick}>1 </button>
                 <button id="num2" value='2' onClick={onClick}>2 </button>
                 <button id="num3" value='3' onClick={onClick}>3</button>
                 <button id="num4" value='4' onClick={onClick}>4</button>
          </div>
         )
    }
    else if(upd==="num1"||upd==="num2"||upd==="num3"||upd==="num4")
    {
        return(
            <div>
                <button id="y" value='Yes' onClick={onClick}>Yes </button>
                 <button id="n" value='No' onClick={onClick}>No </button>
                
            </div>
        )
    }
    else if(upd==="y"){
        return(
        <div>
                 <button id="boots" value='Football Boots' onClick={onClick}>Football Boots </button>
                 <button id="pads" value='Shin Guards' onClick={onClick}>Shin Guards </button>
                 <button id="socks" value='Stockings' onClick={onClick}>Stockings </button>
        </div>
        )
    }
    
    else if(upd ==="boots")   
    {
        return(
            <div className="swiper">
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
           
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
           
            <SwiperSlide className="slide">
            <div className="slide-content">
            <div className="slide-img">
                        <img src={adidas} alt="Adidas Boots" id="adidas" onClick={onClick}/>
                    </div>
                    <h4 className="food">Adidas</h4>
                    <br/>
                    <h4 className="price">Rs.3500</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="slide-content">
                    <div className="slide-img">
                        <img src={nike} alt="Nike Boots" id="nike" onClick={onClick}/>
                    </div>
                    <h4 className="food">Nike</h4>
                    <br/>
                    <h4 className="price">Rs.5000</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
            <div className="slide-content">
            <div className="slide-img">
                        <img src={puma} alt="Puma Boots" id="puma" onClick={onClick}/> 
                    </div>
                    <h4 className="food">Puma</h4>
                    <br/>
                    <h4 className="price">Rs.1500</h4>
                </div>
            </SwiperSlide>
         </Swiper>
        </div>
      )
    }

    else if(upd ==="pads")   
    {
        return(
            <div className="swiper">
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
           
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
           
            <SwiperSlide className="slide">
            <div className="slide-content">
            <div className="slide-img">
                        <img src={shin1} alt="Shin Guards" id="shin1" onClick={onClick} height="200px"/>
                    </div>
                    <h4 className="price">Rs.200</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="slide-content">
                    <div className="slide-img">
                        <img src={shin2} alt="Shin Guards" id="shin2" onClick={onClick}/>
                    </div>
                    <h4 className="price">Rs.300</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
            <div className="slide-content">
            <div className="slide-img">
                        <img src={shin3} alt="Shin Guards" id="shin3" onClick={onClick} height="200px"/> 
                    </div>
                    <h4 className="price">Rs.350</h4>
                </div>
            </SwiperSlide>
         </Swiper>
        </div>
      )
    }

    else if(upd ==="socks")   
    {
        return(
            <div className="swiper">
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
           
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
           
            <SwiperSlide className="slide">
            <div className="slide-content">
            <div className="slide-img">
                        <img src={socks1} alt="socks" id="socks1" onClick={onClick} height="180px"/>
                    </div>
                    <h4 className="price">Rs.100</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="slide-content">
                    <div className="slide-img">
                        <img src={socks2} alt="socks" id="socks2" onClick={onClick} height="180px"/>
                    </div>
                    <h4 className="price">Rs.150</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
            <div className="slide-content">
            <div className="slide-img">
                        <img src={socks3} alt="socks" id="socks3" onClick={onClick} height="180px"/> 
                    </div>
                    <h4 className="price">Rs.200</h4>
                </div>
            </SwiperSlide>
         </Swiper>
        </div>
      )
    }


    else if(upd==="adidas"||upd==="nike"||upd==="puma"||upd==="shin1"||upd==="shin2"||upd==="shin3"||upd==="socks1"||upd==="socks2"||upd==="socks3"||upd==="n")
    {
        return(
            <div>
                  <button id="25" value='Yes' onClick={onClick}>Yes </button>
               <button id="26" value='No' onClick={onClick}>No </button>
            </div>
            )  
    }

    else if(upd==="25"||upd==="Order-Details")
    {
        return(
            <div>
             
            </div>
            )  
    }
 
}


export default Bot;




