import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saveFeedback = localStorage.getItem("feedback");
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    // console.log(feedbackType);
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        feedbacks={feedbacks}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
