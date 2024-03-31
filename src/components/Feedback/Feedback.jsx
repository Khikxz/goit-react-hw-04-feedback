import React from 'react';
import css from './Feedback.module.css';

export const Feedback = ({options, onLeaveFeedback}) => {
  return (
    <div>
      <h3>Please leave feedback</h3>
      <div className={css.divFeedback}>
        {options.map(option => (
          <button
            className={css.btnOption}
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
} 

