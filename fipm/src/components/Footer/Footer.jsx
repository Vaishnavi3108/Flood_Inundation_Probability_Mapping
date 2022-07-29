import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer ">
                <div className='contact_us'>
                    <h2>Contact Us</h2>
                    <ul>
                        <p> Space Applications Centre (ISRO) </p>
                        <p> Opposite DPS School, Bopal <br/> Ahmedabad 380 058, INDIA </p>
                        <p> Email: vedas[at]sac[dot]isro[dot]gov[dot]in </p>
                        <p> Phone: +91-79-2691-6202/6224 </p>
                        <p> Fax: +91-79-2691-6287 </p>
                    </ul>
                </div>
                <div className='policies'>
                    <h2>Policies</h2>
                    <ul>
                        <p> Disclaimer</p>
                        <p> Feedback</p>
                        <p> Acknowledgement</p>
                        <p> Hyperlinking Policy</p>
                        <p> Help</p>
                        <p> Copyright Policy</p>
                        <p> Security Policy</p>
                        <p> Terms and Conditions</p>
                        <p> Privacy Policy</p>
                    </ul>
                </div>
                <div className='imp_links'>
                    <h2>Important Links</h2>
                    <ul>
                        <p> Energy Map of India </p>
                        <p> MOSDAC </p>
                        <p> Training and Research </p>
                        <p> SAC-Tree Plantation </p>
                    </ul>
                </div>
            </footer>
        </>
    )
}
