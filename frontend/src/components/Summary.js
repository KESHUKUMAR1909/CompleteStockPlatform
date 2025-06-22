import React from 'react'
import Navbar from './Navbar'
const Summary = () => {
  return (
    <div className='container'>
      <div className='row border-bottom p-3 mb-5'>
        <p className='text-muted fs-3 '>{localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).name : "Guest"}
        </p>
      </div>
      <div className='row p-3  border-bottom p-3 ' style={{ marginTop: "10%" }}>
        <p className=' fs-5'>Equity</p>

        <div className='row' >
          <div className='col-4' style={{ borderRight: "1px solid grey", height: "90%" }}>
            <span className='fs-2 text-muted fw-light'>3.74k</span>
            <p className='fw-lighter'>Margin available</p>

          </div>
          <div className='col-4 align-content-center'>
            <span className='fw-lighter fs-6'>Margins used 0</span>
            <p className='fw-lighter fs-6'>Opening balance 3.74k</p>
          </div>
        </div>


      </div>
      <div className='row p-3  border-bottom p-3 mb-5' style={{ marginTop: "10%" }}>
        <p className=' fs-5' >Holdings(13)</p>

        <div className='row'>
          <div className='col-4' style={{ borderRight: "1px solid grey", height: "90%" }}>
            <p className='fw-lighter fs-6 text-success'>1.55k<sub>+5.20%</sub></p>
            <p className='fw-lighter fs-6'>P&L</p>

          </div>
          <div className='col-4'>
            <span className='fw-lighter fs-6'>Current Value 31.43k</span>
            <p className='fw-lighter fs-6'>Investment 29.88k</p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Summary
