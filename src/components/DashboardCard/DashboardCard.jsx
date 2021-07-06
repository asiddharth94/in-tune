import React from "react";

import "./DashboardCard.css";

function DashboardCard({ icon, cardType, cardText }) {
  return (
    <div className={`dashboard__card ${cardType}`}>
      <div className="dashboard__card--counter">
        <h2>1000</h2>
      </div>
      <img src={icon} alt="emoji" />
      <p className="dashboard__card--text">
        <strong>{cardText}</strong>
      </p>
    </div>
  );
}

export default DashboardCard;
