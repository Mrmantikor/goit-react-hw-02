import s from "./Options.module.scss";

const Options = ({
  updateFeedback,
  feedbacksData,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <ul className={s.optionBox}>
      {feedbacksData.map((item) => (
        <li key={item}>
          <button
            className={`${s.optionButton} ${s[item]}`}
            onClick={() => updateFeedback(item)}
          >
            {item}
          </button>
        </li>
      ))}
      <li>
        {totalFeedback > 0 && (
          <button className={s.resetButton} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};

export default Options;
