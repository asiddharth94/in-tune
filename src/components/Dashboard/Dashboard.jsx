import React from "react";

import "./Dashboard.css";
import DashboardCard from "../DashboardCard/DashboardCard";
import awesomeIcon from "../../assets/awesome.svg";
import smileIcon from "../../assets/smile.svg";
import happyIcon from "../../assets/happy.svg";

function Dashboard() {
  return (
    <div className="app__dashboard">
      <DashboardCard cardType="awesome" icon={awesomeIcon} />
      <DashboardCard cardType="happy" icon={happyIcon} />
      <DashboardCard cardType="smile" icon={smileIcon} />
    </div>
  );
}

export default Dashboard;
