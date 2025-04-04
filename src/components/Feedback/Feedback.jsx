const Feedback = ({ feedbacks, totalFeedback }) => {
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);
  return (
    <ul>
      {Object.keys(feedbacks).map((item) => (
        <li key={item}>
          {item}:{feedbacks[item]}
        </li>
      ))}
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
