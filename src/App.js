import ClickMe from "./Components/ClickMe";
import { ClickMe2 } from "./Components/ClickMe2";
import Counter from "./Components/Counter";
import Timer1 from "./Components/Timer1";
import Timer2 from "./Components/Timer2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Counter, Timer</h1>
      <hr />
      <Counter />
      <br />
      <hr />
      <br />
      <Timer1 />
      <Timer2 />
      <br />
      <hr />
      <br />
      <ClickMe />
      <br />
      <hr />
      <ClickMe2 />
    </div>
  );
}
