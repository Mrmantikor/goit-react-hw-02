const Options = ({
  updateFeedback,
  feedbacksData,
  handleResetClick,
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
        {totalFeedback > 0 && <button onClick={handleResetClick}>Reset</button>}
      </li>
    </ul>
  );
};

export default Options;
