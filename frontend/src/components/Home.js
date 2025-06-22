import React from 'react';
import Left from './Left';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100 m-0">
        {/* Left Sidebar */}
        <div
          className="col-3 bg-light p-0"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflowY: 'auto',
            borderRight: '1px solid #ccc',
          }}
        >
          <Left />
        </div>

        {/* Right Side */}
        <div className="col-9 d-flex flex-column" style={{ padding: "0px 10px 0px 40px " }}>
          {/* Fixed Navbar in right section */}
          <div
            className="sticky-top bg-white z-1"
            style={{ padding: '10px 20px' }}
          >
            <Navbar />
          </div>

          {/* Scrollable Right Content */}
          <div
            className="flex-grow-1 ms-5"
            style={{
              overflowY: 'auto',
              padding: '16px 20px',
              maxHeight: '80vh',
              scrollbarWidth: 'none',        // Firefox
              msOverflowStyle: 'none'        // IE/Edge
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
