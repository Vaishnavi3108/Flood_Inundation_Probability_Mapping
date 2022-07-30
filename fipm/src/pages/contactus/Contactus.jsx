import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import "../contactus/contactus.css"



export default function Contactus() {
    return (
        <div>
            <Header />

            <Navbar />
            <section className="aboutus container ">
                <h2>Contact Us</h2>
                <p  >Group Director, VEDAS Research Group</p>

                <p>Space Applications Centre (ISRO)
                    Opposite DPS School, Bopal
                    Ahmedabad 380 058, INDIA,</p>
                <br></br>
                <p>Phone: +91-79-2691 6202</p>
                <p> Fax: +91-79-2691 6287</p>
                <br></br>

                <p>e-mail: vedas[at]sac[dot]isro[dot]gov[dot]in</p>
                <br></br>
                <p className='subtitle' ><h2>Web Information Manager</h2></p>
                <p className='subtitle' > Shashikant A Sharma</p>
                <p>Scientist-G</p>
                <p>Space Applications Centre, Ahmedabad</p>
                <br></br>
                <p>Phone: +91-79-2691 6202</p>
                <p> Fax: +91-79-2691 6287</p>


            </section>


            <Footer />

        </div>
    )
}
