import axios from "../Axios/PublicAxios";

export const AddEmployee = (data) => axios.post("/addEmployee", data);

export const Getallemployees = () => axios.get("/getemployees")

export const GetallemployeesCount=()=> axios.get("/getemployeecount")