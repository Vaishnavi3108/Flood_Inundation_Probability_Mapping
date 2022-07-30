import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'

export default function Map() {

    function getData(data){
        console.log(data)
    }


    return (
        <>

            <Header />
            <Navbar />
            <div className="search-section">
                <Search getData={getData} />
            </div>

            <section>
                
            </section>

            <Footer />
        </>
    )
}
