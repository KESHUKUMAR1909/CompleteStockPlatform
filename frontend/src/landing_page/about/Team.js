import React from 'react'
function Team() {
    return ( 
         <div className='row p-5 mt-5 border-top'>
        <div className='row '> <h1 className='text-center mx-5 text-muted mt-5 '  style={{ marginLeft: '500px' }}>Profile</h1> </div>
        <div className='row'>
          <div className='col-6 p-5 text-muted' style={{ lineHeight: '1.3', fontSize: '18px' }} >
            <div className='row'>
              <img src='media/images/nithinKamath.jpg' className='rounded-circle mx-auto' style={{ width: "50%" }} alt='profileImage'></img>
            </div>
            <div className='row text-center text-muted'>
              <h1>Keshu kumar</h1>
            </div>
            <div className='row text-center text-muted'>
              <p>Founder , CEO</p>
            </div>

          </div>
          <div className='col-6 p-5 text-muted align-content-center' style={{ fontSize: '18px' }}>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
              <br />
              <br />
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
              <br />
              <br />
              Playing basketball is his zen.
              <br />
              <br />
              Connect on Homepage / TradingQnA / Twitter
            </p>
          </div>
        </div>



      </div>


     );
}

export default Team;