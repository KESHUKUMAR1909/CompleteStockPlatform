import React from 'react'

function Pricing() {
    return (
        <div className='container' style={{paddingLeft:"5%"}}>
            <div className='row'>
                <div className='col-4'>
                    <h1>
                        Unbeatable Pricing
                    </h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='' style={{ textDecoration: "none" }}>See Pricing <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a>


                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col  p-2 border'>
                            <h1>₹0</h1>
                            <p>free equity delivery and <br/> direct mutual funds</p>
                        </div>
                         <div className='col p-2 border'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;