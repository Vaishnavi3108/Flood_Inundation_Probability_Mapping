import React, { useEffect } from 'react'
import { useState } from 'react';
import Select from 'react-select';


import '../Search/Search.css'
import myJSON from '../../JsonFiles/stateAndDistrict.json'

export default function Search(props) {

  //-------------------------------------------- Declarations --------------------------------

  const [chosedState, setChosedState] = useState("")
  const [chosedDistrict, setChosedDistrict] = useState("")

  // Normal Search

  const State = []
  const District = []


  stateDropdown()

  //------------------------------------------- Dropdown for state-------------------------------------------------

  function stateDropdown() {
    myJSON.states.forEach(element => {
      const state = element.state
      const obj = { label: state, value: state }
      State.push(obj)
    });
  }

  useEffect(() => {
    districtDropdown()
  }, [chosedState])
  

  //------------------------------------------- Dropdown for District-------------------------------------------------

  function districtDropdown() {
    myJSON.states.forEach(element => {

      if (element.state === chosedState) {
        District.length = 0 // Empty District Array Before Push so that if Other State is Selected Distrcits will be Overidden
        element.districts.forEach(district => {
          const obj = { label: district, value: district }
          District.push(obj)
        })
      }

    });
  }


  //Checks Whether Inputs value are filled or not

  function checkSearchInput() {

    if (chosedState === "") {
      alert("Please Select State")
    }
    else if (chosedDistrict === "") {
      alert("Please Select District")
    }
    else {
      return {chosedState , chosedDistrict}
    }
  }


  //------------------------------------------- Styles-------------------------------------------------


  const dashboardStyle = {
    width: "100%"
  }

  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      padding: '0px',
      border: 'none',
      outline: 'none'
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#0D4F8C',
      width: '36px',
      height: '36px'
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'none',
      border: 'none',
      boxShadow: 'none',
      "&:hover": {
        border: 'none !important',
      }
    }),
    container: (provided, state) => ({
      ...provided,
      "&:hover": {
        border: 'none',
      }
    }),
    menulist: (provided, state) => ({
      ...provided,
      color: "red"
    })
  }




  return (<>
      <div className='search-container '>
        
          <div className="all-search-parameters ">
            <div className="search-parameters ">

              <div className="stateAndDistrict ">



                <div className=''>
                  <div className='search-input-conatainer'>
                    <Select styles={customStyles} options={State} className="search-input" onChange={opt => setChosedState(opt.value)} id='state-input' placeholder="State" />
                  </div>
                </div>

                <div className=''>
                  <div className='search-input-conatainer'>
                    <Select styles={customStyles} options={District} className="search-input" onChange={opt => setChosedDistrict(opt.value)} id='state-input' placeholder="District" />
                  </div>
                </div>


              </div>
            </div>

            <button className="search-btn " type="button" onClick={() => props.getData(checkSearchInput())} >Search</button>
          </div>
      </div>
  </>

  )
}
