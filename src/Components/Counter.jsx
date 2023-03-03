import { useCounter } from "../Hooks/useCounter";

export default function Counter() {
  const [state, setterFn] = useCounter(0, 2);

  return (
    <div className="App">
      <h1>Counter : {state} </h1>
      <button onClick={setterFn}>+</button>
    </div>
  );
}
