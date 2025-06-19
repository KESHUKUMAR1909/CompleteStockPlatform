import React from 'react';

const Benefits = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-6 text-center" style={{paddingLeft:"9%" , paddingTop:"8%"}}>
          <img src="media/images/acop-benefits.svg" style={{ width: "60%" }} alt="Benefits"/>
          <p className="fs-2 mt-4 p-3 text-start">Benefits of opening a Zerodha demat account</p>
        </div>

        {/* Right Column */}
        <div className="col-6 p-5" style={{lineHeight:"2.5" , padding:"1%"}}>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h3 className='mb-3'>Unbeatable pricing</h3>
              <p className='text-muted' style={{lineHeight:"1.5"}}>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
            </li>
            <li className="mb-4">
              <h3 className='mb-3'>Best investing experience</h3>
              <p className='text-muted' style={{lineHeight:"1.5"}}>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
            </li>
            <li className="mb-4">
              <h3 className='mb-3'>No spam or gimmicks</h3>
              <p className='text-muted' style={{lineHeight:"1.5"}}>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
            </li>
            <li>
              <h3 className='mb-3'>The Zerodha universe</h3>
              <p className='text-muted' style={{lineHeight:"1.5"}}>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
