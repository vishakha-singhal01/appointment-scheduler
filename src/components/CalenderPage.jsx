// CalendarPage.jsx
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const CalendarPage = ({ appointments, onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center ">
      <div className="bg-blue-50 p-8 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
        <Calendar
          className="mb-4 custom-calendar"
          tileClassName={({ date }) => {
            // Add custom styles for specific dates (if needed)
            // Example: Highlight dates with appointments
            const hasAppointment = appointments.some(
              (appointment) =>
                new Date(appointment.date).toDateString() === date.toDateString()
            );
            return hasAppointment ? 'has-appointment' : '';
          }}
          tileContent={({ date, view }) => {
            const hasAppointment = appointments.some(
              (appointment) =>
                new Date(appointment.date).toDateString() === date.toDateString()
            );
            return hasAppointment ? <div className="bg-green-500 w-1 h-1 m-auto"></div> : null;
          }}
        />
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md mt-4"
          onClick={onClose}
        >
          Close Calendar
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;
