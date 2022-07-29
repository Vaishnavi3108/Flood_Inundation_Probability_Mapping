import React from 'react'

export default function InfoSection(props) {
    let imageArray = props.data.images
  return (
    <>
        <h2 className="info-section-title">
            {props.data.title}
          </h2>
          <p>
            {props.data.desc}
          </p>
          <div className="info-section-images ">
            {
              props.data.images.map(ele=>{
                  <img src={ele} alt="" />
                })
            }
          </div>
          <p>
          {props.data.text}
          </p>
          <hr/>
    </>
  )
}
