import { useState } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const ClickCounter = ({ value, onCount }) => {
  return <button onClick={onCount}>Clicks: {value}</button>;
};

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleReset = () => {
    setClicks(0);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={css.container}>
      <Description />
      <Options />

      <Feedback />

      <Notification />
      <div className={css.cont}>
        <h1>State in React</h1>

        <ClickCounter value={clicks} onCount={handleClick} />
        <ClickCounter value={clicks} onCount={handleClick} />
        <ClickCounter value={clicks} onCount={handleClick} />
        <button onClick={handleReset}>Reset</button>

        <hr />

        <hr />
        <button onClick={handleToggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            voluptatem. Reprehenderit eum beatae adipisci alias illo, recusandae
            dignissimos distinctio aperiam tempore, omnis exercitationem
            cupiditate sint eveniet mollitia suscipit iusto! Delectus
            exercitationem officiis ducimus ex? Tenetur ad dolorem natus unde
            nostrum distinctio repudiandae voluptatem soluta, vero, quisquam eos
            rerum facere consectetur.
          </p>
        )}
      </div>
    </div>
  );
}
