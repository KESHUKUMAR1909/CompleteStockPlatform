import React from 'react'

function Awards() {
    return (
        <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='media/images/largestBroker.svg' />
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>Largest Stock Broker In India</h1>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your need</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity Derviatives</p>
                            </li>
                            <li>
                                <p>Currency Derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Stocks and IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Goals</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src='media/images/pressLogos.png'  alt='pressLogos.png' style={{width:"85%"}}/>

            </div>
            </div>
        </div>
    );
}

export default Awards;
