import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

function DashboardPage() {
  return (
    <div className=" max-h-screen">
      <div className="flex max-w-[100%]">
        <div className="hidden md:block max-w-[100%] z-50">
          <AdminSidebar />
        </div>
        <div className="w-full flex-row justify-center max-w-[100%] z-0">
          <AdminNavbar />
          <div className="pl-7">
            <AdminDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
