// VideoPlayer.js
import React from 'react';
import AlteaGiF from '../assets/img/AlteaGiF.mp4';

const Altea = () => {
  return (
    <div className="video-container">
      <video className="video-player" controls autoPlay muted loop>
        <source src={AlteaGiF} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Altea;