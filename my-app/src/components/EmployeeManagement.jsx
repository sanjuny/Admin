import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { AddEmployee, Getallemployees } from "../Api/EmployeeAuth";

function EmployeeManagement() {
  /* --------------------------------- states --------------------------------- */

  const [open, setOpen] = useState(false);
  const [emoploye, setEmployee] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* --------------------------------- event handlers --------------------------------- */

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  /* -------------------------- handlesubmit the form ------------------------- */

  const handleAddsubmit = async (formdata) => {
    try {
      const { data } = await AddEmployee(formdata);
       setOpen(false);  
    } catch (error) { 
      console.log(error, "error");
    }
  };

  /* ----------------------------- getall employee ---------------------------- */

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await Getallemployees();
        setEmployee(data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchEmployee();
  }, [open]);

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg mt-10">
        <button
          onClick={handleOpenModal}
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Add Employee
        </button>
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-lg">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {emoploye.map((user) => (
              <tr key={user.id} className="border-b bg-slate-200">
                <td className="px-6 py-4 text-black">{user.id}</td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white rounded-l-lg">
                  <div className="pl-3">
                    <div className="text-base font-semibold text-black">
                      {user.Name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-black">{user.Department}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-black">
                    {user.Salary}
                  </div>
                </td>
                <td className="px-6 py-4 rounded-r-lg text-black">
                  {user.Rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal */}

      {open && (
        <div className="modal-container">
          <div className="modal-content">
            <IoMdClose
              onClick={handleCloseModal}
              className="float-right hover:text-red-500"
            />
            <form onSubmit={handleSubmit(handleAddsubmit)} className="w-full p-8">
              <div className="w-full pr-4">
                <p className="text-xl text-black dark:text-black text-center">
                  Add Employee
                </p>
                <label className="block text-gray-500 dark:text-gray-400 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  {...register("Name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                      message: "Name is invalid",
                    },
                  })}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
              </div>
              <p className="text-red-500">{errors.Name?.message}</p>
              <div className="w-full pr-4">
                <label className="block text-gray-500 dark:text-gray-400 text-sm font-bold mb-2">
                  Department
                </label>
                <input
                  {...register("Department", {
                    required: "Department is required",
                  })}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
              </div>
              <p className="text-red-500">{errors.Department?.message}</p>
              <div className="w-full pr-4">
                <label className="block text-gray-500 dark:text-gray-400 text-sm font-bold mb-2">
                  Salary
                </label>
                <input
                  {...register("Salary", {
                    required: "Salary is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Salary must be a number",
                    },
                  })}
                  className="bg-gray-200 text-gray-500 dark:text-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
              </div>
              <p className="text-red-500">{errors.Salary?.message}</p>
              <div className="w-full pr-4">
                <label className="block text-gray-500 dark:text-gray-400 text-sm font-bold mb-2">
                  Rating
                </label>
                <input
                  {...register("Rating", {
                    required: "Rating is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Rating must be a number",
                    },
                  })}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="number"
                />
              </div>
              <p className="text-red-500">{errors.Rating?.message}</p>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeeManagement;
