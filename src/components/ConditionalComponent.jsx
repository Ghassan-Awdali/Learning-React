import Code from "./Code";
import Welcome from "./Welcome";
export default function ConditionalComponent() {
  const display = true;
  let message;

  return display ? <Welcome /> : <Code />;
}
