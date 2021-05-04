import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        type="button"
        name="good"
        onClick={onLeaveFeedback}
        className={styles.good}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
        className={styles.neutral}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
        className={styles.bad}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;