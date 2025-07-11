import React from 'react'
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
      <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'> 
                    Invest in Anything
                </h1>
                <p>Online Platform to inverst in stocks , derivatives , mutual funds</p>
                <Link to='/signup'> <button className='p-3 btn btn-primary fs-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button></Link>
            </div>
      </div>
     );
}

export default Hero;