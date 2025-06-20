import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data.js";

const WatchList = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="form-control me-2"
        />
        <span className="badge bg-secondary">{watchlist.length} / 50</span>
      </div>

      <ul className="list-group">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div>
        <p className={`mb-1 fw-bold ${stock.isDown ? "text-danger" : "text-success"}`}>
          {stock.name}
        </p>
        <div className="d-flex align-items-center">
          <span className="me-2">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-danger" />
          ) : (
            <KeyboardArrowUp className="text-success" />
          )}
          <span className="ms-2">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions />}
    </li>
  );
};

const WatchListActions = () => {
  return (
    <div className="d-flex gap-2">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="btn btn-sm btn-success">Buy</button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="btn btn-sm btn-danger">Sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="btn btn-sm btn-outline-secondary">
          <BarChartOutlined />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="btn btn-sm btn-outline-secondary">
          <MoreHoriz />
        </button>
      </Tooltip>
    </div>
  );
};

export default WatchList;
