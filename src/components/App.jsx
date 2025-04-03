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

  const handleOptionClick = (banan) => {
    setFeedback((prev) => ({
      ...prev,
      [banan]: prev[banan] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acc, item) => acc + item,
    0
  );

  return (
    <Container>
      <Description />
      <Options onLeaveFeedback={handleOptionClick} />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          onReset={resetFeedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
};

export default App;
