import React from "react";
import { useTimer } from "../Hooks/useTimer";
export default function Timer1() {
  const show = useTimer(1500);

  return (
    <div>
      <h1>Timer : 1</h1>
      {show && <h1>I'm Here 1</h1>}
    </div>
  );
}
