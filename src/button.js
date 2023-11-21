import React, { useState } from 'react';

const ToggleText = () => {
  // State to manage the visibility of the text
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility} 
      
      variant='contained' color='success'>Hide</button>
      {isVisible && <p>Show some text or hide </p>}
    </div>
  );
};

export default ToggleText;