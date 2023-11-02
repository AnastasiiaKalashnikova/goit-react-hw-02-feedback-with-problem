import { Component } from 'react';
import { Button } from '../Button/Button';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Wrapp } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        good: prevState.good + 1,
      };
    });
  };
  updateNeutral = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        neutral: prevState.neutral + 1,
      };
    });
  };
  updateBad = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        bad: prevState.bad + 1,
      };
    });
  };
  //ЗАГАЛЬНА Ф-ЦІЯ, НЕ ЗНАЮ ЯК ПЕРЕДАТИ option
  updateState = option => {
    this.setState(prevState => {
      switch (option) {
        case 'good':
          return {
            ...prevState,
            good: prevState.good + 1,
          };
        case 'neutral':
          return {
            ...prevState,
            neutral: prevState.neutral + 1,
          };
        case 'bad':
          return {
            ...prevState,
            bad: prevState.bad + 1,
          };
      }
    });
  };

  countTotalFeedback = state => {
    let sum = 0;
    for (const value of Object.values(state)) {
      sum += value;
    }
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback(this.state)) * 100;
  };

  render() {
    const total = this.countTotalFeedback(this.state);
    const rate = Math.round(this.countPositiveFeedbackPercentage(this.state));
    console.log(this.state, total);

    return (
      <Wrapp>
        <Section title={'Please leave feedback'}>
          <Button onUpdate={this.updateGood}>Good</Button>
          <Button onUpdate={this.updateNeutral}>Neutral</Button>
          <Button onUpdate={this.updateBad}>Bad</Button>
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message={'There is no feedback'}></Notification>
          ) : (
            <Statistics
              state={this.state}
              total={total}
              rate={rate}
            ></Statistics>
          )}
        </Section>
      </Wrapp>
    );
  }
}
