import React from 'react'

const Details = () => {
  return (
    <div className='text-center p-2' style={{backgroundColor:"#FAFAFB"}}>
      <div className='container  mt-5 '>
        <div className='row'>
          <h1>Steps to open a demat account with Zerodha</h1>
        </div>
        <div className='row p-5'>
          <div className='col-7'>
            <img src='media/images/steps-acop.svg' alt='steps-acop.svg' />
          </div>
          <div className="col-5">
            <ul className="list-unstyled text-start">
              <li className="border-bottom p-3">
                <p className="mb-0 fs-3">Enter the requested details</p>
              </li>
              <li className="border-bottom p-3">
                <p className="mb-0 fs-3">Complete e-sign & verification</p>
              </li>
              <li className="p-3">
                <p className="mb-0 fs-3">Start investing!</p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Details
