import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API=process.env.REACT_APP_API_URL;
const Holdings = () => {
  const [holdingsData, setHoldingsData] = useState([]);  // start as array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(
          `${API}/allHoldings`,
          { withCredentials: true }            // <— include auth cookies
        );
        setHoldingsData(res.data);             // <— use res.data
      } catch (err) {
        console.error(err);
        setError('Failed to load your holdings.');
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, [holdingsData]); // only once

  if (loading) return <p className="text-center mt-5">Loading holdings...</p>;
  if (error)   return <p className="text-center mt-5 text-danger">{error}</p>;

  // Totals
  let totalInvestment = 0;
  let totalCurrentValue = 0;

  const holdingsWithCalc = holdingsData.map(item => {
    const currVal = item.qty * item.price;
    const investment = item.qty * item.avg;
    const pnl = currVal - investment;
    const netChange = item.avg ? ((item.price - item.avg) / item.avg) * 100 : 0;

    totalInvestment     += investment;
    totalCurrentValue   += currVal;

    return { ...item, currVal, investment, pnl, netChange };
  });

  const totalPL = totalCurrentValue - totalInvestment;

  return (
    <div className='container mt-5'>
      <div className='row'>
        <p className='fs-5 text-muted fw-lighter p-3'>
          Holdings ({holdingsData.length})
        </p>
      </div>

      <div className='row p-3 text-muted border-top border-bottom'>
        <table className='table table-bordered text-center'>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg Cost</th>
              <th>LTP</th>
              <th>CurrVal</th>
              <th>P&L</th>
              <th>Net Chg.</th>
              <th>Day Chg</th>
            </tr>
          </thead>
          <tbody>
            {holdingsWithCalc.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
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
                <td>{item.day || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='row text-center mt-4'>
        <div className='col-4'>
          <p className='text-muted fs-3'>Total Investment</p>
          <p>₹{totalInvestment.toFixed(2)}</p>
        </div>
        <div className='col-4'>
          <p className='text-muted fs-3'>Current Value</p>
          <p>₹{totalCurrentValue.toFixed(2)}</p>
        </div>
        <div className='col-4'>
          <p className='text-muted fs-3'>P&L</p>
          <p style={{ color: totalPL >= 0 ? 'green' : 'red' }}>
            ₹{totalPL.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
