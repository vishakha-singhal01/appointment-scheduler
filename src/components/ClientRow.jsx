import React, { useState } from 'react';
import AppointmentPage from './AppointmentPage';

const ClientRow = ({ client, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedClient, setEditedClient] = useState(client);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Save the edited client data to the state or perform an API request to save changes
    // For simplicity, we'll just update the state here
    onUpdate(editedClient);
    setEditing(false);
  };

  const handleCancelClick = () => {
    // Cancel the editing and revert changes
    setEditedClient(client);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    // Update the editedClient state based on user input
    setEditedClient({
      ...editedClient,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <section className='flex bg-white shadow-md rounded-md mx-4 mt-4 mb-1 p-4 justify-between'>
    <div className=''>
      <div className='mx-1 p-1 text-base sm:text-2xl font-serif'>
      <span className='me-1 font-semibold text-black'>
        {isEditing ? (
          <input
          className='border border-spacing-0 w-32 sm:w-40'
            type="text"
            name="firstName"
            value={editedClient.firstName}
            onChange={handleInputChange}
          />
        ) : (
          client.firstName
        )}
      </span>
      <span className='font-semibold text-black'>
        {isEditing ? (
          <input
          className='border border-spacing-0 w-32 sm:w-40'
            type="text"
            name="lastName"
            value={editedClient.lastName}
            onChange={handleInputChange}
          />
        ) : (
          client.lastName
        )}
      </span >
      </div>
      <div className='p-1 m-1 text-base sm:font-semibold font-serif'>
        {isEditing ? (
          <input
          className='border border-spacing-0 w-32 sm:w-40'
            type="text"
            name="location"
            value={editedClient.location}
            onChange={handleInputChange}
          />
        ) : (
          client.location
        )}
      </div>
      {/* Display appointments and other information as needed */}
      <div>
        {isEditing ? (
          <>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md m-2 w-24 text-xs sm:text-base sm:w-30' onClick={handleSaveClick}>Save</button>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md m-2 w-24 text-xs sm:text-base sm:w-30' onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <div className='flex'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 rounded-md mx-2 w-10 h-12 sm:w-10 sm:h-10' onClick={handleEditClick}>✏️</button>
          </div>
          
        )}
      </div>
    </div>
    <div>
    <AppointmentPage/>
    </div>

    </section>
    </>
  );
};

export default ClientRow;

