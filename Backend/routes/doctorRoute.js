const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching doctors" });
  }
});

module.exports = router;
