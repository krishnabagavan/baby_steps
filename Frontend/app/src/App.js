
import './App.css';


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors').then(response => setDoctors(response.data));
    axios.get('http://localhost:5000/api/appointments').then(response => setAppointments(response.data));
  }, []);

  const handleBooking = async () => {
    const newAppointment = { doctorId: selectedDoctor, date, timeSlot, patientName, notes };
    await axios.post('http://localhost:5000/api/appointments', newAppointment);
    alert('Appointment booked successfully');
  };

  return (
    <div>
      <h1>Appointment Booking</h1>
      <label>Doctor:</label>
      <select onChange={(e) => setSelectedDoctor(e.target.value)}>
        <option value=''>Select Doctor</option>
        {doctors.map(doc => <option key={doc._id} value={doc._id}>{doc.name}</option>)}
      </select>
      <label>Date:</label>
      <input type='date' onChange={(e) => setDate(e.target.value)} />
      <label>Time Slot:</label>
      <input type='text' onChange={(e) => setTimeSlot(e.target.value)} />
      <label>Patient Name:</label>
      <input type='text' onChange={(e) => setPatientName(e.target.value)} />
      <label>Notes:</label>
      <input type='text' onChange={(e) => setNotes(e.target.value)} />
      <button onClick={handleBooking}>Book Appointment</button>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appt => (
          <li key={appt._id}>{appt.patientName} - {appt.date} - {appt.timeSlot}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
