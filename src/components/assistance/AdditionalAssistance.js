import React from 'react';
import './AdditionalAssistance.css';

const AdditionalAssistance = () => {
  return (
    <div className="assistance-container">
      <div className="assistance-left">
        <h2>For additional assistance</h2>
      </div>
      <div className="assistance-right">
        <p>
          If you would like more guidance finding a formulation, our consultants are available
          to help via live assistance.
        </p>
        <button className="consultant-button">
          Speak to a real consultant <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default AdditionalAssistance;
