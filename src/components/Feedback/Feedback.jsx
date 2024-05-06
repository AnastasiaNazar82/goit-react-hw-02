import css from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  positiveFeedback,
  totalFeedback,
}) {
  return (
    <ul className={css.list}>
      <li className={css.list_item}>
        <p>Good: {good}</p>
      </li>
      <li className={css.list_item}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={css.list_item}>
        <p>Bad: {bad}</p>
      </li>
      {totalFeedback > 0 ? (
        <div>
          <li className={css.list_item}>
            <p>Total: {totalFeedback}</p>
          </li>
          <li className={css.list_item}>
            <p>Positive: {positiveFeedback}%</p>
          </li>
        </div>
      ) : (
        ""
      )}
    </ul>
  );
}
