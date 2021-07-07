import React from "react";

import "./Home.css";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Feed from "../Feed/Feed";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="app__home">
      <Header />
      <Dashboard />
      <Feed />
      <Footer />
    </div>
  );
}

export default Home;
