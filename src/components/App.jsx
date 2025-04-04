import { useEffect, useState } from "react";
import Container from "./Container/Container.jsx";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification.jsx";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem("feedback-data")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acc, item) => acc + item,
    0
  );

  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  return (
    <>
      <Container>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          feedbacksData={Object.keys(feedback)}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedbacks={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification totalFeedback={totalFeedback} />
        )}
      </Container>
      <div className="signature">Bohdan Vasylovych</div>
    </>
  );
};

export default App;
