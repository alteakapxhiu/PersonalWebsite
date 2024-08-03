// PopupMessage.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

const PopupMessage = ({ message, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Show the popup when the component mounts
    const timer = setTimeout(() => {
      setShow(false); // Hide the popup after a delay
      setTimeout(() => {
        if (typeof onClose === 'function') {
          onClose(); // Call the onClose function if it is defined
        }
      }, 300); // Close the popup after animation
    }, 5000); // Adjust the duration to control how long the popup stays

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup-message ${show ? 'show' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

// Define prop types
PopupMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func // onClose is an optional function
};

export default PopupMessage;
