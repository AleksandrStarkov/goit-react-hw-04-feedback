import { useState } from 'react';
// import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const options = [
  { id: 'good', title: 'Good', name: 'good', type: 'button' },
  { id: 'neutral', title: 'Neutral', name: 'neutral', type: 'button' },
  { id: 'bad', title: 'Bad', name: 'bad', type: 'button' },
];
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = ((good / total) * 100).toFixed(0);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={onButtonClick} />
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </Section>
  );
};

export default App;
