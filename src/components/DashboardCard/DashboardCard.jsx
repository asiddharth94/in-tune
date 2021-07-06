import React from "react";

import "./DashboardCard.css";

function DashboardCard({ cardType, srcUrl }) {
  return (
    <>
      {" "}
      <div className={`app__dashboard__card ${cardType}`}>
        <img src={srcUrl} alt="emoji" />
      </div>
    </>
  );
}

export default DashboardCard;
