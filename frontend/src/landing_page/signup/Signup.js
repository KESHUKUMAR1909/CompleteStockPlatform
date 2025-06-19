import React from 'react';
import Hero from './Hero.js';
import Details from './Details.js';
import Faqs from './Faqs.js';
import OpenAccount from '../OpenAccount.js'
import Benefits from './Benefits.js';
function Signup() {
    return (
        <>
            <Hero />
            <Details />
            <Benefits />
            <Faqs />
            <OpenAccount />
        </>
    );
}

export default Signup;