import { Component } from 'react';
import { Button } from './Button/Button';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // ПЕРЕПИСАТИ
  countTotalFeedback = state => {
    let sum;
    sum = state.good + state.neutral + state.bad;
    console.log(sum);
    return sum;
  };

  countPositiveFeedbackPercentage = state => {
    let rate;
    rate = (this.countTotalFeedback(this.state) / this.state.good) * 100;
    return rate;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={'Statistics'}>
          <Statistics state={this.state}></Statistics>
        </Section>
        <Section title={'Please leave feedback'}>
          <Button>Good</Button>
          <Button>Neutral</Button>
          <Button>Bad</Button>
        </Section>
      </div>
    );
  }
}
