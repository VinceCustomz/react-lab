import './StudentResult.css'

export default function StudentScore(props) {
  return (
    <div className="score">
      <div>{props.score}</div>
    </div>
  );
}
