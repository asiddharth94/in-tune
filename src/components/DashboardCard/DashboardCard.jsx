import React from "react";

import "./DashboardCard.css";

function DashboardCard({ cardType, icon }) {
  return (
    <div className={`app__dashboard__card ${cardType}`}>
      <img src={icon} alt="emoji" />
    </div>
  );
}

export default DashboardCard;
