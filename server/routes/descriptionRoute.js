const express = require("express");
const router = express.Router();
const { addDescription, getDescription, getDescCount } = require("../controllers/descriptionController");

router.post("/addDescription", addDescription);

router.get("/getalldesc", getDescription);

router.get("/getcount", getDescCount);





module.exports = router;