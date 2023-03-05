import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { AddDescription, Getalldesc } from "../Api/DescriptionAuth";

function DepartmentManagement() {
  /* --------------------------------- states --------------------------------- */

  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState([]);
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

  /* --------------- handle submitting the DepartmentManagement --------------- */

  const handleAddsubmit = async (formdata) => {
    try {
      const { data } = await AddDescription(formdata);
      setOpen(false); 
    } catch (error) {
      console.log(error, "error");
    }
  };

  /* ------------------------- getting all decriptions ------------------------ */

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const { data } = await Getalldesc();
        setDesc(data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchDescription();
  }, [open]);

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg mt-10">
        <button
          onClick={handleOpenModal}
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Add DepartMent
        </button>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3 pl-64">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {desc.map((item) => (
              <tr key={item.id} className="border-b bg-slate-200 border-b2">
                <td className="px-6 py-4 text-black">{item.Department}</td>
                <td className=" pl-64 rounded-r-lg text-black webkit-scrollbar  text-sm h-32 overflow-y-scroll">
                  {item.Description}
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
            <form onSubmit={handleSubmit(handleAddsubmit)} className="w-96 p-8">
              <p className="mb-4 text-xl text-black dark:text-black text-center">
                Add Department
              </p>
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
                  Description
                </label>
                <textarea
                  {...register("Description", {
                    required: "Description is required",
                  })}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                ></textarea>
              </div>
              <p className="text-red-500">{errors.Description?.message}</p>
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

export default DepartmentManagement;
