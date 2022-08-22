import React from 'react'
import ReactDOMClient from 'react-dom/client'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import { useRef } from 'react'
import axios from 'axios'
import '../Map/Map.css'
import { Download } from 'react-feather';

export default function Map() {

    const imageContainer = useRef()


    function getData(data) {

        let newData = {
            "State": data.chosedState,
            "District": data.chosedDistrict,
        }

        var config = {
            method: 'get',
            url: 'http://localhost:8001/result/result',
            params: newData
        };

        axios(config)
            .then(function (response) {

                console.log(response.data[0])

                let path = response.data[0].ImagePath
                path = path.replace('\\', '/')

                const pic = require(`../../${path}`)
                console.log(pic)

                const root = ReactDOMClient.createRoot(imageContainer.current)

                const image = document.createElement('img')
                image.src = pic



                root.render(<>
                    <img id='result-img' src={pic} />
                    <div className='info-section' >
                        <a href={pic} download="Image.png" >
                            <button id='download-btn' >
                                <Download />
                            </button>
                        </a>
                        <p id='desc'>
                            Description : {response.data[0].Data}
                        </p>
                    </div>
                </>)


            })
            .catch(function (error) {
                alert(error)
            });

    }



    return (
        <>

            <Header />
            <Navbar />
            <div className="search-section">
                <Search getData={getData} />
            </div>

            <section className='image-section' ref={imageContainer} >

            </section>

            <Footer />
        </>
    )
}
