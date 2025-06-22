import React from 'react';
import { positions } from '../data/data';

const Positions = () => {
  // Totals
  let totalInvestment = 0;
  let totalCurrVal = 0;

  const positionsWithCalc = positions.map((item) => {
    const currVal = item.qty * item.price;
    const investment = item.qty * item.avg;
    const pnl = currVal - investment;
    const netChange = ((item.price - item.avg) / item.avg) * 100;

    // Totals
    totalInvestment += investment;
    totalCurrVal += currVal;

    return {
      ...item,
      currVal,
      investment,
      pnl,
      netChange
    };
  });

  const totalPL = totalCurrVal - totalInvestment;

  return (
    <div className='container mt-5'>
      <div className='row'>
        <p className='fs-5 text-muted fw-lighter p-3'>
          Positions ({positions.length})
        </p>
      </div>

      {/* Table Section */}
      <div className='row p-3 text-muted border-top border-bottom'>
        <table className='table table-bordered text-center'>
          <thead>
            <tr>
              <th className='fw-lighter'>Instrument</th>
              <th className='fw-lighter'>Product</th>
              <th className='fw-lighter'>Qty.</th>
              <th className='fw-lighter'>Avg Cost</th>
              <th className='fw-lighter'>LTP</th>
              <th className='fw-lighter'>CurrVal</th>
              <th className='fw-lighter'>P&L</th>
              <th className='fw-lighter'>Net Chg.</th>
              <th className='fw-lighter'>Day Chg</th>
            </tr>
          </thead>
          <tbody>
            {
              positionsWithCalc.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.product}</td>
                  <td>{item.qty}</td>
                  <td>{item.avg.toFixed(2)}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>{item.currVal.toFixed(2)}</td>
                  <td style={{ color: item.pnl >= 0 ? 'green' : 'red' }}>
                    {item.pnl.toFixed(2)}
                  </td>
                  <td style={{ color: item.netChange >= 0 ? 'green' : 'red' }}>
                    {item.netChange.toFixed(2)}%
                  </td>
                  <td style={{ color: item.day.includes('-') ? 'red' : 'green' }}>
                    {item.day}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className='row text-center mt-4'>
        <div className='col-4'>
          <h6 className='text-muted'>Total Investment</h6>
          <p>₹{totalInvestment.toFixed(2)}</p>
        </div>
        <div className='col-4'>
          <h6 className='text-muted'>Current Value</h6>
          <p>₹{totalCurrVal.toFixed(2)}</p>
        </div>
        <div className='col-4'>
          <h6 className='text-muted'>P&L</h6>
          <p style={{ color: totalPL >= 0 ? 'green' : 'red' }}>
            ₹{totalPL.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Positions;
