import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import '../Home/Home.css'
import { useState } from 'react'

import logo from '../../assets/header-logo.png'
import InfoSection from '../../components/info-section/info-section'
import Footer from '../../components/Footer/Footer'

export default function Home() {

  const [images, setImages] = useState([1, 2, 3, 4, 5])

  const infoSection1 = {
    title: 'Space based observation of Indian wetlands',
    desc:"India is blessed with an enormous diversity of wetland ecosystems which play a critical role in regulating carbon and hydrological cycles, resilience in climate change and land degradation, water related disasters, nutrient cycling, local economy etc. The concern for conservation and management of wetlands is increasing all over the world including India, due to burgeoning population pressure and developmental activities. Therefore, Space Applications Centre has carried out National wetland inventory and assessment-2nd cycle under SARITA (SAtellite based RIver hydrological Techniques and Application) programme of SAC, funded by Department of Space. This National wetland geo-database is developed using multi-date Resourcesat-2/2A, LISS-III datasets and with the support of many partner Institutions. Nation-wide mapping of wetlands at 1:50000 scale provides current status of wetlands, its type, extent, size, location, distribution, as well as decadal changes. Wetlands inventory statistics along with geospatial analysis has been brought out in the form of an atlas titled “Space based observation of Indian wetlands",
    text:"Click here to Know more  (PDF Size:471MB Language: English)",
    images:[logo,logo,logo]
  }

  const infoSection2 = {
    title: 'Launch of the ‘Geospatial Energy Map of India’ by Hon’ble VC, NITI Aayog on October 18, 2021',
    desc:"The Geospatial Energy Map of India was launched by Dr. Rajiv Kumar, Vice Chairman, NITI Aayog on October 18, 2021. The occasion was graced by Dr. K. Sivan, Chairman, ISRO, Shri Amitabh Kant, CEO, NITI Aayog, Dr. V.K. Saraswat, Member, NITI Aayog and Shri Nilesh M Desai, Director SAC. NITI Aayog and ISRO jointly developed the Geospatial Energy Map of India, in association with Ministry of Power, Ministry of Coal, Ministry of New and Renewable Energy, Ministry of Petroleum and Natural Gas, and Department of Atomic Energy. The website currently provides access to 27 thematic layers of energy sector in India.",
    text:"Click here to go to Geospatial Energy Map of India Click here to watch the inauguration event (YouTube)",
    images:[logo,logo,logo]
  }

  const infoSection3 = {
    title: 'Catastrophic Calving Events due to Collision of D28',
    desc:"",
    text:"Click here to Know more  (PDF Size:418KB Language: English)",
    images:[logo,logo,logo]
  }

  return (
    <>
      <Header />
      <Navbar />

      <section className="home-container ">

        <div className="image-slider border">
          {
            images.map(ele => {
              <p>{ele}</p>
            })
          }
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
      <Footer/>
    </>
  )
}