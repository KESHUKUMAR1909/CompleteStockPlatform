import React from 'react'
import Navbar from '../Navbar.js';
import Hero from './Hero.js';
import Awards from './Awards.js'
import Stats from './Stats.js';
import Pricing from './Pricing.js';
import Education from './Education.js';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer.js';
import { useEffect } from 'react';
import  axios from 'axios';
function HomePage() {
    useEffect(() => {
        const user = localStorage.getItem('user');

        if (user) {
            // Send logout request to backend
            axios.post('http://localhost:3002/logout')
                .then(() => {
                    console.log("User logged out from backend.");
                })
                .catch(err => {
                    console.error("Logout error:", err);
                });

            // Clear frontend session
            localStorage.clear();
            console.log("LocalStorage cleared on HomePage load.");

        }
    }, []);
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;