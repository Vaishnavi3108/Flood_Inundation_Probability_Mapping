import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import '../Home/Home.css'
import { useState, useEffect, useRef } from 'react'
import * as ReactDOM from 'react-dom/client';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import InfoSection from '../../components/info-section/info-section'
import Footer from '../../components/Footer/Footer'

export default function Home() {

  const [distance, setDistance] = useState(0)
  const slider = useRef()

  const infoSection1 = {
    title: 'Space based observation of Indian wetlands',
    desc: "India is blessed with an enormous diversity of wetland ecosystems which play a critical role in regulating carbon and hydrological cycles, resilience in climate change and land degradation, water related disasters, nutrient cycling, local economy etc. The concern for conservation and management of wetlands is increasing all over the world including India, due to burgeoning population pressure and developmental activities. Therefore, Space Applications Centre has carried out National wetland inventory and assessment-2nd cycle under SARITA (SAtellite based RIver hydrological Techniques and Application) programme of SAC, funded by Department of Space. This National wetland geo-database is developed using multi-date Resourcesat-2/2A, LISS-III datasets and with the support of many partner Institutions. Nation-wide mapping of wetlands at 1:50000 scale provides current status of wetlands, its type, extent, size, location, distribution, as well as decadal changes. Wetlands inventory statistics along with geospatial analysis has been brought out in the form of an atlas titled “Space based observation of Indian wetlands",
    text: "Click here to Know more  (PDF Size:471MB Language: English)",
    images: ['header-logo.png' , 'header-logo.png' , 'header-logo.png']
  }

  const infoSection2 = {
    title: 'Launch of the ‘Geospatial Energy Map of India’ by Hon’ble VC, NITI Aayog on October 18, 2021',
    desc: "The Geospatial Energy Map of India was launched by Dr. Rajiv Kumar, Vice Chairman, NITI Aayog on October 18, 2021. The occasion was graced by Dr. K. Sivan, Chairman, ISRO, Shri Amitabh Kant, CEO, NITI Aayog, Dr. V.K. Saraswat, Member, NITI Aayog and Shri Nilesh M Desai, Director SAC. NITI Aayog and ISRO jointly developed the Geospatial Energy Map of India, in association with Ministry of Power, Ministry of Coal, Ministry of New and Renewable Energy, Ministry of Petroleum and Natural Gas, and Department of Atomic Energy. The website currently provides access to 27 thematic layers of energy sector in India.",
    text: "Click here to go to Geospatial Energy Map of India Click here to watch the inauguration event (YouTube)",
    images: ['header-logo.png' , 'header-logo.png']
  }

  const infoSection3 = {
    title: 'Catastrophic Calving Events due to Collision of D28',
    desc: "",
    text: "Click here to Know more  (PDF Size:418KB Language: English)",
    images: ['header-logo.png']
  }


  useEffect(() => {
    if(distance > -1400 && distance <= 0 ){
      slider.current.style.transform = `translateX(${distance}px)`
    }else{
      setDistance(0)
    }
  }, [distance])
  

  return (
    <>
      <Header />
      <Navbar />

      <section className="home container ">
        <div className="image-slider ">
          <FiChevronLeft  className='icon' onClick={()=>{
            setDistance(distance-200)
          }}/>
          <div className="slider-still ">
            <div className="image-container " ref={slider}>
              <div className='slider-image border' style={{ backgroundImage: "url(/assets/header-logo.png)", backgroundSize: "cover" }} ></div>
              <div className='slider-image border' style={{ backgroundImage: "url(/assets/header-logo.png)", backgroundSize: "cover" }} ></div>
              <div className='slider-image border' style={{ backgroundImage: "url(/assets/header-logo.png)", backgroundSize: "cover" }} ></div>
              <div className='slider-image border' style={{ backgroundImage: "url(/assets/header-logo.png)", backgroundSize: "cover" }} ></div>
              <div className='slider-image border' style={{ backgroundImage: "url(/assets/header-logo.png)", backgroundSize: "cover" }} ></div>
            </div>
          </div>
          <FiChevronRight className='icon' onClick={()=>{
            setDistance(distance+200)
          }} />

        </div>
        <hr />
        <div className="announcment ">
          <h3 className='red' >Announcement</h3>
          <div className="announcement-items ">
            <span>Vegetation Condition Index (VCI) Dashboard</span>
            <span>Satellite Data Visualisation (Near Real Time) (New)</span>
            <span>3D City Model and Rooftop Solar Potential</span>
            <span>Global Solar Calculator (Beta-version)  (New) </span>
          </div>
        </div>
        <hr />
        <InfoSection data={infoSection1} />
        <InfoSection data={infoSection2} />
        <InfoSection data={infoSection3} />
      </section>
      <Footer />
    </>
  )
}
