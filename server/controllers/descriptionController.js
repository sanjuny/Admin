const db = require("../models")
const Descriptions = db.descriptiondata

/* ---------------- adding an descrition detail of department --------------- */

module.exports.addDescription = async (req, res) => {
  try {
    const description = await Descriptions.create(req.body);
    res
      .status(201)
      .json({ message: "Employee added sucessfully", description: description });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

/* ------------------------- getting all description ------------------------ */

module.exports.getDescription = async (req, res) => {
  try {
    const description = await Descriptions.findAll();
    res.status(200).json(description);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};


/* ------------------------- getall desc count ------------------------- */

module.exports.getDescCount = async (req, res) => {
  try {
    const count = await Descriptions.count();
     return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}