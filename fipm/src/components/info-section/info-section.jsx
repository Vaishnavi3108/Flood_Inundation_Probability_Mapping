import React from 'react'
import { useRef, useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom/client';

export default function InfoSection(props) {

  const imgSection = useRef()
  const [imageArray, setImageArray] = useState(props.data.images)


  useEffect(() => {

    let images = []
    let root = ReactDOM.createRoot(imgSection.current)

    
    imageArray.map((ele) => {
      let element = <div className='slider-image border' style={{ backgroundImage: `url(/assets/${ele})`, backgroundSize: "cover" }} ></div>
      images.push(element)
    })
    
    root.render(
      images
    )

  }, [imageArray])




  return (
    <>
      <h2 className="info-section-title">
        {props.data.title}
      </h2>
      <p>
        {props.data.desc}
      </p>
      <div className="info-section-images " ref={imgSection}>
      </div>
      <p>
        {props.data.text}
      </p>
      <hr />
    </>
  )
}
