// ClientList.js
import React, { useState } from 'react';
import ClientRow from './ClientRow';
import clientData from './ClientData';

const ClientList = () => {
  const [clients, setClients] = useState(clientData);

  const handleUpdate = (updatedClient) => {
    // Find the index of the client in the array
    const index = clients.findIndex((client) => client.id === updatedClient.id);

    // Update the client array with the edited client data
    const updatedClients = [...clients];
    updatedClients[index] = updatedClient;

    // Update the state with the edited client data
    setClients(updatedClients);
  };

  return (
    <div>
      {clients.map((client) => (
        <ClientRow key={client.id} client={client} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default ClientList;

