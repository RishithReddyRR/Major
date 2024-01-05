import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import vnrLogo from "../../images/vnr-logo.png";
import { MdDashboard } from "react-icons/md";
const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={vnrLogo} />
      </Link>
      <div className="dashboard-route">
        <MdDashboard className="icon" />
        <Link to="/admin/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default SideBar;
