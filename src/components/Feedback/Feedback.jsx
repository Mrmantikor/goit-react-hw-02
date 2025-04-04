const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
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
