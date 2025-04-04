import { useState } from "react";
import Container from "./Container/Container.jsx";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification.jsx";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acc, item) => acc + item,
    0
  );

  const handleResetClick = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <Container>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedbacksData={Object.keys(feedback)}
        handleResetClick={handleResetClick}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </Container>
  );
};

export default App;
