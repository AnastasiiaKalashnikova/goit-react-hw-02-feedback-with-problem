export const Statistics = ({ state: { good, neutral, bad }, total, rate }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {rate}%</li>
    </ul>
  );
};
