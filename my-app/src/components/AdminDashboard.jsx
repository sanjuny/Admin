import React, { useEffect, useState } from "react";
import { GetalldescCount } from "../Api/DescriptionAuth";
import { GetallemployeesCount } from "../Api/EmployeeAuth";

function AdminDashboard() {
  /* --------------------------------- states --------------------------------- */

  const [employeeCount, setEmployeeCount] = useState(0);
  const [descCount, setDescCount] = useState(0);

  /* --------------------- fetching the count of the users -------------------- */

  useEffect(() => {
    const fetchEmployeeCount = async () => {
      try {
        const response = await GetallemployeesCount();
        const data = response.data
        setEmployeeCount(data.count);
      } catch (error) {
        console.log(error, "errorr");
      }
    };
    fetchEmployeeCount();
  }, []);

  /* -------------------- fetching the count of department -------------------- */

  useEffect(() => {
    const fetchDescriptionCount = async () => {
      try {
        const { data } = await GetalldescCount()
        setDescCount(data.count)
      } catch (error) {
        console.log(error,'errror');
      }
    }
    fetchDescriptionCount();
  },[])

  return (
    <>
      <div className="flex mt-10 justify-around">
        <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6462/6462992.png"
            alt=""
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              {employeeCount}
            </h1>
            <span className="text-gray-500">Employees</span>
          </div>
        </div>
        <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9888/9888468.png"
            alt=""
            width="64"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">{descCount}</h1>
            <span className="text-gray-500">Departments</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
