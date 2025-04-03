import Container from "./Container/Container.jsx";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification.jsx";

const App = () => {
  //   const [feedback, setFeedback] = useState({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });

  return (
    <Container>
      <Description />
      <Options />
      <Feedback />
      <Notification />
    </Container>
  );
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback });
  };
};

export default App;
