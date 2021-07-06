import React from "react";

import "./Dashboard.css";
import DashboardCard from "../DashboardCard/DashboardCard";

function Dashboard() {
  return (
    <div className="app__dashboard">
      <DashboardCard cardType="awesome" srcUrl="../../assets/awesome.svg" />
      <DashboardCard cardType="smile" srcUrl="../../assets/smile.svg" />
      <DashboardCard cardType="happy" srcUrl="../../assets/happy.svg" />
    </div>
  );
}

export default Dashboard;
