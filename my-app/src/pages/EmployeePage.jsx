import React from 'react'
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';
import EmployeeManagement from '../components/EmployeeManagement';

function EmployeePage() {
  return (
    <div className=" max-h-screen">
      <div className="flex max-w-[100%]">
        <div className="hidden md:block max-w-[100%] z-50">
          <AdminSidebar />
        </div>
        <div className="w-full flex-row justify-center max-w-[100%] z-0">
          <AdminNavbar />
          <div className="pl-7 pr-7">
            <EmployeeManagement/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage