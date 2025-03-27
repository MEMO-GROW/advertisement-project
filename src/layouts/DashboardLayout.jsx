import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import Footer from "../components/DashNav";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-60 flex flex-col gap-y-4">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
