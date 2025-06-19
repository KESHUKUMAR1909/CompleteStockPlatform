import React from 'react';

function Hero() {
    return (
        <div className='bg-primary p-5'>
            <div className='container bg-primary text-white mt-5'>
                <div className='row'>

                    {/* Left column */}
                    <div className='col-6'>
                        <h5 className='mb-4'>Support Portal</h5>
                        <h3 className='mb-4'>
                            Search for an answer or browse help topics to create a ticket
                        </h3>

                        <input
                            className='p-3 mb-4'
                            style={{ width: '80%', borderRadius: '5px', border: 'none' }}
                            placeholder='Eg: how do I activate F&O, why is my order getting rejected'
                        />

                        <div className='row'>
                            <div className='col-4'>
                                <a href='#' className='text-white text-decoration-underline'>
                                    Track account opening
                                </a>
                            </div>
                            <div className='col-4'>
                                <a href='#' className='text-white text-decoration-underline'>
                                    Track system activation
                                </a>
                            </div>
                            <div className='col-4'>
                                <a href='#' className='text-white text-decoration-underline'>
                                    Intraday
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className='col-6 d-flex flex-column justify-content-start align-items-end text-white'>

                        {/* Track tickets link */}
                        <div className='mb-5'>
                            <a href='#' className='text-white text-decoration-underline'>
                                Track tickets
                            </a>
                        </div>

                        {/* Featured section */}
                        <div className='w-75 text-start'>
                            <h5 className='mb-4 fw-bold'>Featured</h5>
                            <ol className='text-white'>
                                <li className='mb-2'>
                                    <a href='#' className='text-white text-decoration-underline'>
                                        MCX Crude option contract expiry – June 2025
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='text-white text-decoration-underline'>
                                        Latest Intraday leverages and Square-off timings
                                    </a>
                                </li>
                            </ol>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
