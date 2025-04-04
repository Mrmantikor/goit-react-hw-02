import s from "./Feedback.module.scss";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={s.feedbackContainer}>
      {Object.keys(feedbacks).map((item) => (
        <li key={item} className={`${s.feedbackItem} ${s[item]}`}>
          {item}: {feedbacks[item]}
        </li>
      ))}
      <li className={`${s.totalFeedback}`} style={{ "--total": totalFeedback }}>
        Total: {totalFeedback}
      </li>
      <li
        className={`${s.positiveFeedback}`}
        style={{ "--percentage": positiveFeedback }}
      >
        Positive: {positiveFeedback}%
      </li>
    </ul>
  );
};

export default Feedback;
