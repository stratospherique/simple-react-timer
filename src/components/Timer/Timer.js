import React, { useState, useEffect } from 'react';
import './Timer.scss';

export default () => {
  const [secondsState, setSecondsState] = useState(new Date().getSeconds())
  const [minutesState, setMintuesState] = useState(new Date().getMinutes());
  const [hoursState, setHoursState] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(changeTime, 1000);
    return () => clearInterval(interval)
  }, [secondsState])

  const changeTime = () => {
    if (secondsState === 59) {
      setSecondsState(0);
      if (minutesState === 59) {
        setMintuesState(0);
        if (hoursState === 23) {
          setHoursState(0);
        } else setHoursState(hoursState => hoursState + 1)
      } else setMintuesState(minutesState => minutesState + 1);
    } else setSecondsState(secondsState => secondsState + 1);
  }

  return (
    <>
      <span className="stick hours">{("0" + hoursState).slice(-2)}</span>
      <span className="stick">:</span>
      <span className="stick minutes">{("0" + minutesState).slice(-2)}</span>
      <span className="stick">:</span>
      <span className="stick seconds">{("0" + secondsState).slice(-2)}</span>
    </>
  )
}