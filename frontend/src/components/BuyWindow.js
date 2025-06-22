import React, { useContext, useState } from 'react';
import OpenBuySellWindow from './context/OpenBuySellWindow.js';
import { placeOrder } from './placeOrder.js';
const BuyWindow = () => {
  const { isOpen, setIsOpen, type , stockName} = useContext(OpenBuySellWindow);
  const [qty, setQty] = useState('1');
  const [price, setPrice] = useState('0');
  const [loading, setLoading] = useState(false);

  const margin = ((+qty || 0) * 140.65).toFixed(2);

  const handleOrder = async () => {
    
    const mode = type.toUpperCase(); // either "BUY" or "SELL"
    setLoading(true);
    try {
      const message = await placeOrder(
        stockName,
        Number(qty),
        Number(price),
        mode
      );
      alert(message);
      setIsOpen(false);
      setQty('1');
      setPrice('0');
    } catch (err) {
      alert('Error placing order: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999 }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ zIndex: 99999 }}>
          <div className="modal-body bg-light p-4">
            <h5 className="mb-3 text-capitalize">{type} {stockName}</h5>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Qty.</label>
                <input
                  type="text"
                  value={qty}
                  onChange={(e) =>
                    setQty(e.target.value.replace(/\D/g, '').replace(/^0+(?=\d)/, ''))
                  }
                  className="form-control"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="col">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value.replace(/\D/g, '').replace(/^0+(?=\d)/, ''))
                  }
                  className="form-control"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <p className="text-start fw-semibold">Margin required ₹{margin}</p>

            <div className="text-end">
              <button
                className="btn btn-success me-2"
                onClick={handleOrder}
                disabled={loading}
                
              >
                {loading ? `${type}…` : type}
              </button>
              <button
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setIsOpen(false);
                  setQty('1');
                  setPrice('0');
                }}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyWindow;
