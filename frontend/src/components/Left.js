import React from 'react';
import WatchList from './WatchList.js';

const Left = () => {
  return (
    <div
      className="shadow-sm"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '28%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderRight: '1px solid #dee2e6',
        zIndex: 1000,
      }}
    >
      {/* Top Market Info */}
      <div className="row border-bottom p-3 m-0 bg-white">
        <div className="col-6 d-flex justify-content-evenly" style={{ fontSize: '13px' }}>
          <span style={{ fontWeight: '500' }} className="text-muted">NIFTY 50</span>
          <span className="text-danger">100.2</span>
        </div>
        <div className="col-6 d-flex justify-content-evenly" style={{ fontSize: '13px' }}>
          <span style={{ fontWeight: '500' }} className="text-muted">SENSEX</span>
          <span className="text-danger">100.2</span>
        </div>
      </div>

      {/* Scrollable WatchList */}
      <div
        className="p-2"
        style={{
          height: 'calc(100vh - 20vh)', // adjust if top section height changes
          overflowY: 'scroll',
          scrollbarWidth: 'thin', // Firefox
        }}
      >
        <WatchList />
      </div>
    </div>
  );
};

export default Left;
