import React from 'react'
function Hero() {
    return (
        <div className='container'>
            <div className='row text-center border-bottom p-5 '>
                <h1 className='text-muted mt-5 fs-16'>Zerodha Products</h1>
                <h3 className='mt-3 fs-4'>Sleek , modern and intuitive trading platforms</h3>
                <p>Checkout our investment offerings <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></p>
            </div>
        </div>
    );
}

export default Hero;