// AppointmentPage.jsx
import React, { useState } from 'react';
import AppointmentEdit from './AppointmentEdit';
import CalendarPage from './CalenderPage';

const AppointmentPage = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSaveAppointment = (date, time) => {
    try {
      // Replace the following line with your logic to update the appointments
      // Example: setAppointments([...appointments, { date, time }]);
      setAppointments([...appointments, { date, time }]);
      setShowEditor(false);
      setSelectedAppointment(null);
    } catch (error) {
      console.error('Error saving appointment:', error);
    }
  };

  const handleEditAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowEditor(true);
  };

  const handleDeleteAppointment = (appointment) => {
    try {
      const updatedAppointments = appointments.filter(
        (existingAppointment) => existingAppointment !== appointment
      );
      setAppointments(updatedAppointments);
      setShowEditor(false);
      setSelectedAppointment(null);
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleShowCalendar = () => {
    setShowCalendar(true);
  };

  const handleHideCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <div>
      {/* Render other components */}

      {/* Render AppointmentEditor conditionally */}
      {showEditor && (
        <AppointmentEdit
          onSave={handleSaveAppointment}
          onCancel={() => {
            setShowEditor(false);
            setSelectedAppointment(null);
          }}
          selectedAppointment={selectedAppointment}
        />
      )}

      {/* Render a button to open the editor */}
      <div className='flex flex-col sm:flex-row items-center'>
      <button
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md mt-4 me-2"
        onClick={() => setShowEditor(true)}
      >
        Add Appointment
      </button>
      <button
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md mt-4 mx-2 sm:mb-1"
        onClick={handleShowCalendar}
      >
        📅
      </button>
      </div>

      {/* Render existing appointments */}
      {appointments.map((appointment, index) => (
        <div key={index}>
          <span className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 text-white rounded-md me-2">{appointment.date} - {appointment.time}</span>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 mt-4 mx-1 rounded-md"
            onClick={() => handleEditAppointment(appointment)}
          >
            ✏️
          </button>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-md"
            onClick={() => handleDeleteAppointment(appointment)}
          >
            🧹
          </button>
        </div>
      ))}

      {/* Render CalendarPage conditionally */}
      {showCalendar && (
        <CalendarPage
          appointments={appointments}
          onClose={handleHideCalendar}
        />
      )}

      {/* Button to show the calendar */}
      
    </div>
  );
};

export default AppointmentPage;
