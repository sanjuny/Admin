import React from "react";

function AdminNavbar() {
  return (
    <div className="flex sm:items-center sm:justify-between bg-white h-16 w-full shadow-2xl border-2">
      <div className="logo hidden sm:block">
        <h1 className="text-black ml-4 pl-10 cursor-pointer text-2xl">ADMIN</h1>
      </div>
      <div className="flex justify-between sm:justify-end w-full sm:w-auto">
        <div className="flex flex-wrap justify-center">
          <div className="px-4">
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709722.png"
              alt="..."
              className="shadow rounded-full max-w-full h-12 align-middle border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
