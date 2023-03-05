import axios from "../Axios/PublicAxios";

export const AddDescription = (data) => axios.post("/addDescription", data);

export const Getalldesc = () => axios.get("/getalldesc");

export const GetalldescCount = () => axios.get("/getcount");
