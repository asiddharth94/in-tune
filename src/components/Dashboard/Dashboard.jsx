import React from "react";

import "./Dashboard.css";
import DashboardCard from "../DashboardCard/DashboardCard";
import awesomeIcon from "../../assets/awesome.svg";
import smileIcon from "../../assets/smile.svg";
import happyIcon from "../../assets/happy.svg";

function Dashboard() {
  return (
    <div className="app__dashboard">
      <DashboardCard
        cardType="awesome"
        cardText="Yay! It was Awesome."
        icon={awesomeIcon}
      />
      <DashboardCard
        cardType="happy"
        cardText="Hmm.. It was Good."
        icon={happyIcon}
      />
      <DashboardCard
        cardType="smile"
        cardText="It's Okay! I'll be back."
        icon={smileIcon}
      />
    </div>
  );
}

export default Dashboard;
