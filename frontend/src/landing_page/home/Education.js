import React from 'react'

function Education() {
  return (
    <div className='container mt-5 p-5'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/images/education.svg' style={{ width: "70%" }} />
        </div>
        <div className='col-6 p-5'>
          <h1 className='fs-2 mb-5'>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

          <a href='' style={{textDecoration:"none"}}>Varsity<svg style={{width:"20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>

          <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          
          <a href='' style={{textDecoration:"none"}}>Trading Q&A <svg style={{width:"20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>

        </div>

      </div>
    </div>
  );
}

export default Education;