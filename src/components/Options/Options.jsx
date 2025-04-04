const Options = ({
  updateFeedback,
  feedbacksData,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <ul>
      {feedbacksData.map((item) => (
        <li key={item}>
          <button onClick={() => updateFeedback(item)}>{item}</button>
        </li>
      ))}
      <li>
        {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
      </li>
    </ul>
  );
};

export default Options;
