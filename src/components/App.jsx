import React from 'react';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const options = [
  { id: 'good', title: 'Good', name: 'good', type: 'button' },
  { id: 'neutral', title: 'Neutral', name: 'neutral', type: 'button' },
  { id: 'bad', title: 'Bad', name: 'bad', type: 'button' },
];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const { name } = e.target;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return ((this.state.good / total) * 100).toFixed(0);
  };

  render() {
    const totalCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onButtonClick}
        />
        {totalCount === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    );
  }
}

export default App;
