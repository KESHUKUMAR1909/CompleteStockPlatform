import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API=REACT_APP_API_URL;
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${API}/allOrders`,
          { withCredentials: true }            // <— include auth cookies
        );
        setOrders(res.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setErrorMsg("Unable to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const totalQty = orders.reduce((acc, order) => acc + order.qty, 0);
  const totalInvestment = orders.reduce(
    (acc, order) => acc + order.qty * order.price,
    0
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <p className="fs-5 text-muted fw-lighter p-3">
          Orders ({orders.length})
        </p>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : errorMsg ? (
        <p className="text-danger text-center">{errorMsg}</p>
      ) : orders.length === 0 ? (
        <div className="text-center">
          <p className="text-muted">You haven't placed any orders yet</p>
          <Link to="/dashboard" className="text-danger">
            Go Back To Dashboard
          </Link>
        </div>
      ) : (
        <>
          {/* Table Section */}
          <div className="row p-3 text-muted border-top border-bottom">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th className="fw-lighter">Instrument</th>
                  <th className="fw-lighter">Qty.</th>
                  <th className="fw-lighter">Price</th>
                  <th className="fw-lighter">Mode</th>
                  <th className="fw-lighter">Time</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td style={{ color: order.mode === "BUY" ? "green" : "red" }}>
                      {order.mode}
                    </td>
                    <td>{order.createdAt ? new Date(order.createdAt).toLocaleString() : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="row text-center mt-4">
            <div className="col-6">
              <p className="text-muted fs-3">Total Quantity</p>
              <p>{totalQty}</p>
            </div>
            <div className="col-6">
              <p className="text-muted fs-3">Total Investment</p>
              <p>₹{totalInvestment.toFixed(2)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
