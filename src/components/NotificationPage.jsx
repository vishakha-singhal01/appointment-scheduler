import React, { useState, useEffect } from 'react';

const NotificationPage = ({ notification, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000); // Adjust the timeout duration as needed
      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  return (
    <div className={`notification ${visible ? 'visible' : 'hidden'} ${notification?.type}`}>
      {notification?.message}
    </div>
  );
};

export default NotificationPage;

