import React from "react";
import { useTimer } from "../Hooks/useTimer";
export default function Timer2() {
  const show = useTimer(3000);

  return (
    <div>
      <h1>Timer : 2</h1>
      {show && <h1>I'm Here 2</h1>}
    </div>
  );
}
