import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import '../About_us/About_us.css'

export default function About_us() {
    return (
        <>

            <Header />
            <Navbar />

            <section className="aboutus container ">
                <h2>About Us</h2>
                <p className='subtitle' >Visualisation of Earth Observation Data and Archival System (VEDAS)</p>
                <p>
                    Space Applications Centre (SAC) is responsible for carrying out research and applications of optical and microwave remote sensing data in a large number of disciplines including Agriculture, Land use, Photogrammetry, Forestry and Environment, Coastal & Marine Resources, Hydrological Studies, Climate Change Studies, Urban & Infrastructure, Cryosphere, Spatial Data Infrastructure, Atmospheric and Ocean Sciences, Early Warning and Disaster Management Support, Planetary Sciences etc. These are also aimed at meeting the requirements of various user ministries of the country. The advancements in EO systems and data products will strengthen natural resources inventory and management, information on the state of the environment, research on climate change and support for mitigation of natural disasters. The end-product from the EO applications will help towards establishment and operationalization of spatial infrastructure and information dissemination system.
                </p>
                <p>
                    The site https://vedas.sac.gov.in depicts vast and varied information that is available at SAC (ISRO). It provides access to thematic spatial derived data repository over land and natural resource inventories generated using these data by SAC (ISRO) or SAC in collaboration with other participating agencies. The processed data for the Moon and the Mars are also available. The description of the spatial data (metadata) including the view of the data is provided. To develop VEDAS, advanced tools and technologies such as satellite remote sensing, Geographical Information Systems (GIS), Geoprocessing, precise Positioning Systems, database and networking infrastructure have been utilized.
                </p>
                <p>
                    The overarching purpose is to expand the societal benefits of the nation’s investments in ISRO Earth science research. VEDAS motivates and encourages talent pool of analysts such as students, researchers and academia to use these data to showcase their spatio-temporal analytical skill. To achieve this goal, VEDAS provides necessary training to familiarize with the data and processing that has taken place to generate thematic layers.
                </p>
                <p>
                    VEDAS provides a platform (data, infrastructure and guidance) for utilisation of information derived over land using mainly Indian space-borne sensors to develop custom crafted geo-spatial applications which can feed into or support the decision making system. It is expected that with such a handshake between data generators and potential analysts, newer and innovative ways will emerge which will facilitate identifying hot-spots and discovering hidden patterns in the spatio-temporal data.
                </p>
                <p className='subtitle' >To know more about VEDAS:</p>
                <div>
                   <p> VEDAS Introduction (MP4, Size:110 MB Language: English) </p>
                   <p> VEDAS Geoportal (MP4, Size:384 MB Language: English) </p>
                   <p> VEDAS Tutorial (YouTube) </p>
                   <p> VEDAS - Lecture on AI and BDA applications(YouTube) </p>
                   <p> VEDAS (PDF, Size:495 KB Language: English) </p>
                   <p> Launch of Geospatial Energy Map of India (YouTube) </p>
                </div>
            </section>

            <Footer />
        </>
    )
}
