export const Statistics = ({ state: { good, neutral, bad } }) => {
  return (
    <ul>
      <li>good={good}</li>
      <li>neutral={neutral}</li>
      <li>bad={bad}</li>
      <li>total=</li>
      <li>positivePercentage=</li>
    </ul>
  );
};
