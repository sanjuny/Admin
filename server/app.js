require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/employeeRoute"));
app.use("/api", require("./routes/descriptionRoute"))

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
