import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { styled } from 'styled-components';
import './../index.css'

const Slide = styled.div`
 Swiper{height: 800px;}
text-align: center;
    margin-top: 30px;
    
`

function Example4() {

    const [isActive,setIsActive] = useState("close");

  return (
    <Slide>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
       {
        Array(50).fill().map((e,i)=>{
            return(
                <SwiperSlide key={i}>Slide{i+1}</SwiperSlide>
            )
        })
       }
     
        </Swiper>
        <button onClick={()=>{setIsActive(isActive ==="open" ? "close" : "open")}}>클릭</button>
        <span>{isActive}</span>
        {/* <p className={isActive === "open" ? "active" : "on"} style={{display: isActive === "open" ? "block" : "none"}}>Lorem ipsum dolor sit amet.</p> */}
        {
        isActive === 'open' &&
        <p className={isActive === "open" ? "active" : "on"} >Lorem ipsum dolor sit amet.</p>
        }
    </Slide>
  )
}

export default Example4