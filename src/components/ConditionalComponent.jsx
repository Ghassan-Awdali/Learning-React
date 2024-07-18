import Code from "./Code";
import Welcome from "./Welcome";
export default function ConditionalComponent() {
  const display = false;
  let message;

  return display ? <h1> Display</h1> : <h1>Display 2</h1>;
}
