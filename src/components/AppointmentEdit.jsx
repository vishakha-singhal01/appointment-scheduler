// AppointmentEditor.js
import React, { useState, useEffect } from 'react';
import NotificationPage from './NotificationPage';

const AppointmentEdit = ({ onSave, onCancel, selectedAppointment }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Set initial values when editing an existing appointment
    if (selectedAppointment) {
      setSelectedDate(selectedAppointment.date);
      setSelectedTime(selectedAppointment.time);
    }
  }, [selectedAppointment]);

  const handleSaveClick = () => {
    if (!selectedDate || !selectedTime) {
      setNotification({ type: 'error', message: 'Please fill in both date and time fields.' });
      return;
    }

    try {
      onSave(selectedDate, selectedTime);
      setNotification({ type: 'success', message: selectedAppointment ? 'Edited successfully' : 'Added successfully' });
    } catch (error) {
      setNotification({ type: 'error', message: 'Error saving appointment. Please try again.' });
    }
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const handleInputChange = (e) => {
    // Update the state based on user input
    if (e.target.name === 'date') {
      setSelectedDate(e.target.value);
    } else if (e.target.name === 'time') {
      setSelectedTime(e.target.value);
    }
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <div>
      {/* Date and time picker */}
      <div className='flex flex-col my-2'>
        <label className='font-bold m-1'>Date:</label>
        <input
          className='border border-spacing-3 rounded-sm bg-green-100'
          type="date"
          name="date"
          value={selectedDate}
          onChange={handleInputChange}
        />
        <label className='font-bold m-1'>Time:</label>
        <input
          className='border border-spacing-3 rounded-sm bg-green-100'
          type="time"
          name="time"
          value={selectedTime}
          onChange={handleInputChange}
        />
      </div>

      {/* Buttons for adding/editing appointments */}
      <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md me-1' onClick={handleSaveClick}>
        {selectedAppointment ? 'Edit Appointment' : 'Add'}
      </button>
      <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md' onClick={handleCancelClick}>Cancel</button>

      {/* Display notifications */}
      <NotificationPage notification={notification} onClose={handleNotificationClose} />
    </div>
  );
};

export default AppointmentEdit;
