import { useState } from 'react';
import Notiflix from 'notiflix';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { Container } from './Feedback.styled';

Notiflix.Notify.init({
  fontSize: '15px',
  cssAnimationStyle: 'from-top',
  success: {
    background: '#32c6b0',
  },
});

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const handleStateClick = feedback => {
    Notiflix.Notify.success(`Thank you for leaving a ${feedback} feedback!`);
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (good !== 0) {
      const result = (good * 100) / total;
      return Math.round(result);
    } else {
      return 0;
    }
  };

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbacks}
            onLeaveFeedback={handleStateClick}
          />
          {countTotalFeedback() > 0 ? (
            <Statistics
              options={feedbacks}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <h2>There is no feedback</h2>
          )}
        </Section>
      </Container>
    </>
  );
};

export default Feedback;
