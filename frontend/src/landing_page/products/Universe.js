import React from 'react'
import { Link } from 'react-router-dom';
function Universe() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <h1 className='fs-2 mt-5 text-muted'>The Zerodha Universe</h1>
                <p className='p-2 fs-6'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row'>
                <div className='col-4 p-5'>
                    <div className='row p-4 justify-content-center' >
                        <img src='media/images/smallcaseLogo.png' style={{ width: "60%" }} />
                        <p className='text-small text-muted text-center p-2' style={{ fontSize: "12px" }}>
                            Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>
                    <div className='row p-5 justify-content-center'>
                        <img src='media/images/sensibullLogo.svg' style={{ width: "70%" }} />
                        <p className='text-small text-muted text-center p-2 ' style={{ fontSize: "12px" }}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>

                </div>
                <div className='col-4 p-5'>

                    <div className='row p-4 justify-content-center'>
                        <img src='media/images/zerodhaFundhouse.png' style={{ width: "60%" }} />
                        <p className='text-small text-muted text-center p-2' style={{ fontSize: "12px" }}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>
                    <div className='row p-4 justify-content-center'>
                        <img src='media/images/goldenpiLogo.png' style={{ width: "60%" }} />
                        <p className='text-small text-muted text-center p-2' style={{ fontSize: "12px" }}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>

                </div>
                <div className='col-4 p-5 '>
                    <div className='row justify-content-center  p-4'>
                        <img src='media/images/streakLogo.png' style={{ width: "60%" }} />
                        <p className='text-small text-muted text-center p-2' style={{ fontSize: "12px" }}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>
                    <div className='row p-4 justify-content-center'>
                        <img src='media/images/dittoLogo.png' style={{ width: "40%" }} />
                        <p className='text-small text-muted text-center p-2' style={{ fontSize: "12px" }}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>

                </div>
                <Link to="/signup" className='text-center' >  <div className='btn btn-primary w-25 text p-3' >Sign up for free </div></Link>

            </div>
        </div>
    );
}

export default Universe;