import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const [target, setTarget] = useState(null);
  const [now, setNow] = useState(null);
  const [diff, setDiff] = useState(0);
  const [id, setId] = useState(-1);

  function handleSubmit() {
    const intervalID = setInterval(() => {
      setId(intervalID);
      console.log(intervalID);
      setDiff(new Date(target) - new Date());

      if (diff < 0) {
        clearInterval(id);
      }
    }, 1000);
  }

  useEffect(() => {
    setDiff(new Date(target) - new Date());
  }, [target]);
  return (
    <>
      <h1>Countdown timer app</h1>
      <div id="input ">
        <input
          type="datetime-local"
          id="datetime"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button id="submit" onClick={handleSubmit}>
          Start
        </button>
      </div>

      {diff}

      <div id="display">
        <ul>
          <li>
            <span id="days"></span>
            days
          </li>
          <li>
            <span id="hours"></span>
            hours
          </li>
          <li>
            <span id="minutes"></span>
            minutes
          </li>
          <li>
            <span id="seconds"></span>
            seconds
          </li>
        </ul>
      </div>
    </>
  );
}

export default Countdown;
