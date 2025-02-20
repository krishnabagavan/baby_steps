const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctorId");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching appointments" });
  }
});

// Book an appointment
router.post("/", async (req, res) => {
  try {
    const { doctorId, date, duration, type, notes } = req.body;
    const newAppointment = new Appointment({ doctorId, date, duration, type, notes });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ error: "Error booking appointment" });
  }
});

module.exports = router;
