import css from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  positiveFeedback,
  totalFeedback,
}) {
  return (
    <>
      <p className={css.list}>Good: {good}</p>
      <p className={css.list}>Neutral: {neutral}</p>
      <p className={css.list}>Bad: {bad}</p>
      <p className={css.list}>Total: {totalFeedback}</p>
      <p className={css.list}>Positive: {positiveFeedback}%</p>
    </>
  );
}
