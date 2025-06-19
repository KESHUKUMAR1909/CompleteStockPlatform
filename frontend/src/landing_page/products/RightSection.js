import React from 'react';

function RightSection({ imageURL, productName, productDescription, tryDemo }) {
    return (
        <div className='container mt-5 border-bottom'>
            <div className='row align-items-center'>
                <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} >Learn More</a>
                    </div>
                </div>
                <div className='col-6 p-5'>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
