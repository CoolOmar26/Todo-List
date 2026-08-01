import React from 'react';

type priorityProps = {
  priority: 'Low' | 'Medium' | 'High';
  setPriority: (priority: 'Low' | 'Medium' | 'High') => void;
};
function PriorityButtons({ priority, setPriority }: priorityProps) {
  return (
    <div className="priorityButtons">
      <button
        type="button"
        className={`priorityButton Low ${priority == 'Low' ? 'active' : ''}`}
        onClick={() => setPriority('Low')}
      >
        <span className="dot Low"></span>
        Low
      </button>

      <button
        type="button"
        className={`priorityButton Medium ${priority == 'Medium' ? 'active' : ''}`}
        onClick={() => setPriority('Medium')}
      >
        <span className="dot Medium"></span>
        Medium
      </button>

      <button
        type="button"
        className={`priorityButton High ${priority == 'High' ? 'active' : ''}`}
        onClick={() => setPriority('High')}
      >
        <span className="dot High"></span>
        High
      </button>
    </div>
  );
}

export default PriorityButtons;
